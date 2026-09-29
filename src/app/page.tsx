import Link from "next/link";
import {FlowDiagram} from "@/components/diagram";
import {EditorialBreak} from "@/components/editorial-break";
import {Footer} from "@/components/footer";
import {Arrow} from "@/components/icons";
import {projects} from "@/data/projects";

const capabilities=[
  ["01","AI Engineering",["Python · APIs · SQL","Persistent systems","Evaluation · testing","Agents","Human-in-the-loop","Local inference"]],
  ["02","LLM Systems",["Code models","Execution feedback","Structured generation","Agents","Evaluation","Prompt refinement"]],
  ["03","Computer Vision & Multimodal",["PyTorch · CLIP","Vision-language models","Prompt learning","LoRA","Transfer learning","Computer vision"]],
  ["04","Machine Learning",["Modelling","Deep learning","Experimentation","Evaluation","Optimisation","scikit-learn"]],
];

export default function Home(){
  const[flagship,second,third,...rest]=projects;
  return <><main id="top">
    <section className="hero shell">
      <div className="hero-kicker"><span>AI Engineer</span><span>London · UK</span><span className="status">Open to opportunities</span></div>
      <h1><span>SHARAN TEJA</span><span className="outline">MEDIKAR</span></h1>
      <div className="hero-bottom"><p className="hero-statement">Building evaluated AI systems<EditorialBreak/>from <em>models</em> to dependable software.</p><div className="hero-copy"><p>Early-career AI engineer completing an MSc in Artificial Intelligence at the University of Surrey. I build and evaluate LLM, machine-learning, multimodal and human-in-the-loop systems—with the decisions, failures and evidence made visible.</p><p className="work-right">Currently have the right to work in the UK.</p><div className="hero-actions"><a className="button primary" href="#work">Selected work <Arrow/></a><a className="text-link" href="https://github.com/sharantejamedikar" target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal/></a><a className="text-link" href="https://www.linkedin.com/in/sharanteja" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal/></a><a className="text-link" href="/cv/sharan-teja-medikar-cv.pdf" target="_blank" rel="noopener noreferrer">CV <Arrow diagonal/></a></div></div></div>
      <div className="hero-grid" aria-hidden="true">{Array.from({length:6}).map((_,i)=><span key={i}/>)}</div>
    </section>

    <section id="work" className="section shell">
      <div className="section-head"><p className="eyebrow">Selected work / 01—05</p><h2>Show the work.<EditorialBreak/><em>Prove the result.</em></h2><p>Five standalone case studies: the problem, my role, the build, technical decisions, evaluation and honest limitations.</p></div>
      <article className="feature-card"><div className="feature-copy"><div className="project-meta"><span>{flagship.index}</span><span>{flagship.category}</span><span>{flagship.year}</span></div><h3>{flagship.title}</h3><p>{flagship.summary}</p><div className="metric"><strong>{flagship.metric}</strong><span>{flagship.metricLabel}</span></div><div className="tag-row">{flagship.tech.slice(0,5).map(t=><span key={t}>{t}</span>)}</div><Link className="case-link" href={`/work/${flagship.slug}`}>Explore case study <Arrow/></Link></div><div className="feature-visual"><p className="visual-label">Adaptive refinement loop</p><FlowDiagram steps={flagship.architecture}/><div className="benchmark-proof" aria-label="MBPP solved tasks improved from 307 to 352 out of 427"><span><strong>307</strong>/427 baseline</span><i aria-hidden="true">→</i><span><strong>352</strong>/427 refined</span></div><div className="code-note"><span>feedback.policy</span><code>refine if failure is recoverable<br/>stop if tests pass or budget ends</code></div></div></article>
      <div className="duo-grid">{[second,third].map((p,i)=><article className={`project-panel panel-${i+1}`} key={p.slug}><div className="project-meta"><span>{p.index}</span><span>{p.category}</span></div><h3>{p.shortTitle}</h3><p>{p.summary}</p>{i===0&&<div className="system-path" aria-label="Job Agent system boundary"><span>Discover · score</span><i aria-hidden="true">→</i><span>Generate · QA</span><i aria-hidden="true">→</i><strong>Human approve · submit</strong><i aria-hidden="true">→</i><span>Track · follow up</span></div>}<div className="panel-bottom"><div className="metric small"><strong>{p.metric}</strong><span>{p.metricLabel}</span></div><Link className="circle-link" href={`/work/${p.slug}`} aria-label={`Read ${p.title} case study`}><Arrow/></Link></div></article>)}</div>
      <div className="project-rows">{rest.map(p=><Link href={`/work/${p.slug}`} className="project-row" key={p.slug}><span className="row-index">{p.index}</span><div><p>{p.category}</p><h3>{p.shortTitle}</h3></div><div className="row-metric"><strong>{p.metric}</strong><span>{p.metricLabel}</span></div><span className="row-arrow"><Arrow/></span></Link>)}</div>
    </section>

    <section id="capabilities" className="section capabilities"><div className="shell"><div className="section-head inverse"><p className="eyebrow">Capabilities / Systems thinking</p><h2>Across the<EditorialBreak/><em>full loop.</em></h2><p>I’m most useful where model behaviour meets engineering reality: evaluation, integration, failure modes and the user experience around AI.</p></div><div className="cap-grid">{capabilities.map(([n,title,items])=><div className="cap" key={String(title)}><span>{String(n)}</span><h3>{String(title)}</h3><ul>{(items as string[]).map(i=><li key={i}>{i}</li>)}</ul></div>)}</div></div></section>

    <section id="experience" className="section shell"><div className="split-title"><p className="eyebrow">Experience / Ownership</p><h2>Built with<EditorialBreak/><em>accountability.</em></h2></div><div className="timeline">
      <article><div><span>2023—2024</span><span>Assam, India</span></div><div><h3>Founder & Technical Lead</h3><p className="org">Police Night Patrolling System</p><ul className="experience-evidence"><li>Originated the product, secured stakeholder approval and assembled a five-person team.</li><li>Led development through testing, UAT and final handover.</li><li>Delivered an operational system supporting 30 patrol vehicles and 60+ users.</li></ul></div></article>
      <article><div><span>Engineering internship</span><span>India</span></div><div><h3>Software Engineering Intern</h3><p className="org">Fleckor Tech</p><ul className="experience-evidence"><li>Built frontend and backend components across 3+ core features.</li><li>Integrated APIs and resolved approximately 15–20 bugs.</li><li>Supported testing and deployment preparation.</li></ul></div></article>
    </div></section>

    <section id="education" className="section shell education"><div className="split-title"><p className="eyebrow">Education / Foundation</p><h2>Rigour meets<EditorialBreak/><em>practice.</em></h2></div><div className="education-list"><article><span>Sep 2025 — Sep 2026</span><div><h3>MSc Artificial Intelligence</h3><p>University of Surrey · Result pending</p><p className="education-detail">Dissertation: Self-Refining Code Generation Using Execution Feedback</p></div></article><article><span>Jun 2021 — May 2025</span><div><h3>BTech Computer Science & Engineering</h3><p>National Institute of Technology Silchar</p></div></article></div></section>

    <section id="contact" className="contact"><div className="shell"><p className="eyebrow">Contact / Start a conversation</p><h2>Building something<EditorialBreak/><em>that needs to work?</em></h2><p>Open to AI Engineering, Machine Learning Engineering and Applied AI opportunities across the UK—including LLM and multimodal systems.</p><a className="contact-email" href="mailto:medikarsharanteja@gmail.com">medikarsharanteja@gmail.com <Arrow diagonal/></a><div className="contact-links"><a href="https://www.linkedin.com/in/sharanteja" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://github.com/sharantejamedikar" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></div></section>
  </main><Footer/></>;
}
