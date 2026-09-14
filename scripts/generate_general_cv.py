#!/usr/bin/env python3
"""Generate the public one-page general AI Engineering CV."""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path


JOB_AGENT = Path("/Users/thesharantejagmail.com/Documents/Jobs/ai-job-agent")
sys.path.insert(0, str(JOB_AGENT / "src"))

from jobagent.candidate import load_candidate  # noqa: E402
from jobagent.cv_calibration import (  # noqa: E402
    Archetype,
    CalibrationSpec,
    CVSelection,
    LayoutConfig,
    SelectedItem,
    load_bank,
    measure_pdf,
    render_docx,
    render_pdf,
    validate_bullet,
)


SUMMARY = (
    "Recently completed an MSc in Artificial Intelligence at the University of Surrey, "
    "with hands-on experience building AI/ML systems using Python, PyTorch and LLMs. "
    "Experienced across applied AI, machine learning, LLM evaluation, computer vision and "
    "software engineering, with a particular interest in building dependable AI systems for "
    "real-world problems. Seeking AI Engineering and Applied AI opportunities combining "
    "technical depth with end-to-end ownership. Currently have the right to work in the UK."
)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--portfolio-url")
    parser.add_argument("--output-dir", type=Path, default=Path("output/cv"))
    args = parser.parse_args()

    bank = load_bank(JOB_AGENT / "candidate/cv/content_bank.yaml")
    candidate = load_candidate(JOB_AGENT / "candidate")
    evidence = candidate.evidence_by_id
    profile = candidate.profile
    contact = [
        profile["location"],
        profile["email"],
        profile["phone"],
        profile["linkedin"].removeprefix("https://www."),
        profile["github"].removeprefix("https://"),
    ]
    if args.portfolio_url:
        contact.append(args.portfolio_url.removeprefix("https://"))
    bank = bank.model_copy(update={"contact_line": " | ".join(contact)})

    item_by_id = {item.id: item for item in bank.experience + bank.projects}

    def selected(item_id: str, bullet_indexes: list[int]) -> SelectedItem:
        item = item_by_id[item_id]
        bullets = [item.bullets[index] for index in bullet_indexes]
        for bullet in bullets:
            validate_bullet(bullet, evidence)
        return SelectedItem(
            id=item.id,
            title=item.title,
            subtitle=item.subtitle,
            kind=item.kind,
            score=100,
            bullets=bullets,
        )

    selection = CVSelection(
        headline="AI Engineer / Applied AI / Machine Learning Engineer",
        summary=SUMMARY,
        education=bank.education,
        modules={
            "msc": ["Fundamentals of Machine Learning", "AI and Sustainability", "Ethics and Regulations of AI"],
            "btech": ["Machine Learning", "Data Structures and Algorithms"],
        },
        experience=[selected("police", [0, 1, 2]), selected("fleckor", [0, 1])],
        projects=[
            selected("codegen", [0, 1, 2, 3]),
            selected("job_agent", [0, 1, 2]),
            selected("vlm", [0, 1, 2]),
            selected("sustainability", [0, 1, 3]),
        ],
        skill_groups={
            "Programming & Data": ["Python", "SQL", "JavaScript", "NumPy", "Pandas"],
            "AI & Machine Learning": ["PyTorch", "scikit-learn", "Computer Vision", "LLM Evaluation", "CLIP"],
            "Generative AI": ["Qwen", "CodeLlama", "AI Agents", "Prompt Engineering"],
            "Engineering & Tools": ["APIs", "Testing", "Git", "Linux", "Firebase"],
        },
        selected_evidence_ids=[],
    )
    selection = selection.model_copy(
        update={
            "education": [
                education.model_copy(
                    update={
                        "dates": education.dates + (" | Result pending" if education.id == "msc" else ""),
                        "dissertation": education.dissertation if education.id == "msc" else None,
                        "leadership": None,
                    }
                )
                for education in selection.education
            ],
        }
    )

    args.output_dir.mkdir(parents=True, exist_ok=True)
    base = args.output_dir / "sharan-teja-medikar-general-ai-engineering-cv"
    layout = LayoutConfig(
        body_font_pt=9.5,
        line_height_pt=9.9,
        section_gap_pt=7.0,
        bullet_gap_pt=0.8,
        heading_after_pt=2.5,
        project_gap_pt=2.5,
        experience_gap_pt=2.5,
        education_gap_pt=2.0,
        title_after_pt=1.0,
        summary_after_pt=1.0,
        top_margin_cm=0.9,
        bottom_margin_cm=0.86,
        side_margin_cm=1.47,
    )
    pdf_path = base.with_suffix(".pdf")
    docx_path = base.with_suffix(".docx")
    metrics, _ = render_pdf(selection, bank, pdf_path, layout)
    render_docx(selection, bank, docx_path, layout)
    report = {
        "portfolio_url": args.portfolio_url,
        "pdf": str(pdf_path),
        "docx": str(docx_path),
        "metrics": metrics.model_dump(mode="json"),
        "selected_experience": [item.id for item in selection.experience],
        "selected_projects": [item.id for item in selection.projects],
        "summary": SUMMARY,
    }
    base.with_suffix(".qa.json").write_text(json.dumps(report, indent=2) + "\n")
    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()
