// packages/matching/matchCandidateToJob.ts
type Candidate = {
  skills?: string[];
  experience?: any[];
  location?: string;
};

type Job = {
  skills_required?: string[];
  experience_level?: string;
  location?: string;
};

export function matchCandidateToJob(
  candidate: Candidate,
  job: Job
) {
  let score = 0;
  const breakdown: Record<string, number> = {};

  /* ---------------- SKILLS (40) ---------------- */
  const candidateSkills = candidate.skills || [];
  const jobSkills = job.skills_required || [];

  if (jobSkills.length) {
    const matched = jobSkills.filter(s =>
      candidateSkills.map(x => x.toLowerCase()).includes(s.toLowerCase())
    );

    const skillScore = Math.round(
      (matched.length / jobSkills.length) * 40
    );

    breakdown.skills = skillScore;
    score += skillScore;
  }

  /* ---------------- EXPERIENCE (30) ---------------- */
  const years = (candidate.experience || []).length;

  let expScore = 0;
  if (job.experience_level === "JUNIOR" && years >= 1) expScore = 30;
  if (job.experience_level === "MID" && years >= 3) expScore = 30;
  if (job.experience_level === "SENIOR" && years >= 5) expScore = 30;

  breakdown.experience = expScore;
  score += expScore;

  /* ---------------- LOCATION (20) ---------------- */
  let locationScore = 0;
  if (
    job.location &&
    candidate.location &&
    candidate.location.toLowerCase().includes(job.location.toLowerCase())
  ) {
    locationScore = 20;
  }

  breakdown.location = locationScore;
  score += locationScore;

  /* ---------------- EDUCATION (10) ---------------- */
  breakdown.education = 10; // MVP: assume ok
  score += 10;

  return { score, breakdown };
}
