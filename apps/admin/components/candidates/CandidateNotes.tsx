// apps/admin/components/candidates/CandidateNotes.tsx
"use client";

import { useState } from "react";

export default function CandidateNotes({
  candidateId,
  notes,
}: {
  candidateId: string;
  notes: any[];
}) {
  const [list, setList] = useState(notes);
  const [text, setText] = useState("");

  async function addNote() {
    if (!text.trim()) return;

    const res = await fetch("/api/candidate/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ candidateId, note: text }),
    });

    const data = await res.json();
    setList([data, ...list]);
    setText("");
  }

  return (
    <div>
      <h3 className="font-semibold mb-3">Notes</h3>

      <textarea
        className="w-full border rounded p-2 mb-2"
        rows={3}
        placeholder="Add a note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={addNote}
        className="bg-gray-800 text-white px-3 py-1 rounded mb-4"
      >
        Add Note
      </button>

      <div className="space-y-3">
        {list.map((n) => (
          <div key={n.id} className="border rounded p-2 text-sm">
            <p>{n.note}</p>
            <span className="text-xs text-gray-500">
              {n.author_email} • {new Date(n.created_at).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
