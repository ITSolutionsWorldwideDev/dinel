// packages/matching/src/matchCandidateToJob.ts
export function matchCandidateToJob(
  candidate: {
    skills?: string[];
    experience?: any[];
    location?: string;
  },
  job: {
    required_skills?: string[];
    experience_level?: string;
    location?: string;
  }
) {
  let score = 0;
  const breakdown: string[] = []; // rename from reasons

  // Skills
  if (candidate.skills && job.required_skills) {
    const matched = candidate.skills.filter(s =>
      job.required_skills!.includes(s)
    );
    score += matched.length * 10;
    if (matched.length) {
      breakdown.push(`Matched skills: ${matched.join(", ")}`);
    }
  }

  // Location
  if (
    candidate.location &&
    job.location &&
    candidate.location === job.location
  ) {
    score += 10;
    breakdown.push("Location match");
  }

  return {
    score,
    breakdown, // now matches your API usage
    matched: score > 0,
  };
}


/* export type MatchBreakdown = {
  skills?: number;
  experience?: number;
  location?: number;
  education?: number;
};

export function matchCandidateToJob(
  candidate: any,
  job: any
): { score: number; breakdown: MatchBreakdown } {
  let score = 0;
  const breakdown: MatchBreakdown = {};

  if (candidate.skills && job.skills) {
    const matched = candidate.skills.filter((s: string) =>
      job.skills.includes(s)
    );
    const skillScore = Math.min(40, matched.length * 8);
    breakdown.skills = skillScore;
    score += skillScore;
  }

  if (candidate.experience?.length) {
    breakdown.experience = 20;
    score += 20;
  }

  if (candidate.location === job.location) {
    breakdown.location = 10;
    score += 10;
  }

  if (candidate.education?.length) {
    breakdown.education = 10;
    score += 10;
  }

  return {
    score: Math.min(score, 100),
    breakdown,
  };
} */
