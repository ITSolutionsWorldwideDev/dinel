// apps/admin/lib/cv/parseWithAI.ts
import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.NEW_OPENAI_API_KEY!,
// });

type ParsedCv = {
  full_name: string | null;
  email: string | null;
  phone: string | null;
  location: string | null;
  skills: string[];
  experience: {
    company: string;
    title: string;
    start: string | null;
    end: string | null;
  }[];
  education: {
    institution: string;
    degree: string;
    year: string | null;
  }[];
};

function getOpenAIClient() {
  const apiKey = process.env.NEW_OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("NEW_OPENAI_API_KEY is not set");
  }

  return new OpenAI({ apiKey });
}

export async function parseCvText(text: string): Promise<ParsedCv> {
  const openai = getOpenAIClient();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0,
    messages: [
      {
        role: "system",
        content:
          "You are a CV parser. Return ONLY valid JSON. No explanations.",
      },
      {
        role: "user",
        content: `
Extract candidate information from the following CV text.

Return strictly this JSON format:
{
  "full_name": string | null,
  "email": string | null,
  "phone": string | null,
  "location": string | null,
  "skills": string[],
  "experience": [
    { "company": string, "title": string, "start": string | null, "end": string | null }
  ],
  "education": [
    { "institution": string, "degree": string, "year": string | null }
  ]
}

CV TEXT:
${text}
        `,
      },
    ],
  });

  const choice = completion.choices?.[0];

  if (!choice || !choice.message || !choice.message.content) {
    throw new Error("Invalid or empty AI response");
  }

  const content = choice.message.content;

  const cleaned = content
    .replace(/^```json/i, "")
    .replace(/^```/, "")
    .replace(/```$/, "")
    .trim();

  let parsed: ParsedCv;

  try {
    parsed = JSON.parse(cleaned);
  } catch {
    console.error("Raw AI output:", cleaned);
    throw new Error("AI returned invalid JSON");
  }

  return parsed;

  // return JSON.parse(content);
}
