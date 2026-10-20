/** Evaluation summaries drawn from the existing project records. */
export const evaluations: Record<string, string> = {
  'self-refining-code-generation': 'I compared single-pass, Best-of-5, adaptive and fixed-k refinement across HumanEval, MBPP, HumanEval Pro and MBPP Pro. I examined successful repairs, regressions, convergence and generation calls alongside the final results.',
  'reliableops-agent': 'I tested the backend in two isolated PostgreSQL test-database runs, with 195 tests passing in each. Fault injection and process-crash testing covered duplicate delivery, transaction rollback, PostgreSQL interruption and worker SIGKILL recovery.',
  'ai-job-agent': 'I used automated tests and schema validation around the workflow, with deterministic eligibility checks, duplicate prevention and bounded retries. Employer-facing actions remain subject to human approval.',
  'police-night-patrolling': 'I stayed involved through testing, user acceptance testing and technical handover. The system reached operational use across approximately 30 patrol vehicles and 60+ users.',
  'vlm-prompt-learning': 'I compared CLIP prompt-learning and adaptation methods across EuroSAT, Oxford Flowers, Food101, DTD, Stanford Cars and FGVC Aircraft, reporting outcomes at dataset level.',
  'longitudinal-health-ml': 'I used 5-fold cross-validation and compared supervised models. I kept the 10,838-participant Wave 1 cohort distinct from the 6,511-participant Wave 1 to Wave 3 longitudinal cohort.',
};
