// apps/admin/components/candidates/editors/ExperienceEditor.tsx
"use client";

type Experience = {
  company: string;
  title: string;
  start?: string;
  end?: string;
};

export default function ExperienceEditor({
  value,
  onChange,
}: {
  value: Experience[];
  onChange: (v: Experience[]) => void;
}) {
  function update(index: number, field: keyof Experience, val: string) {
    const next = [...value];
    next[index] = { ...next[index], [field]: val };
    onChange(next);
  }

  function add() {
    onChange([
      ...value,
      { company: "", title: "", start: "", end: "" },
    ]);
  }

  function remove(index: number) {
    onChange(value.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-4">
      {value.map((exp, i) => (
        <div key={i} className="border rounded p-4 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <Input
              label="Job Title"
              value={exp.title}
              onChange={(v) => update(i, "title", v)}
            />
            <Input
              label="Company"
              value={exp.company}
              onChange={(v) => update(i, "company", v)}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Input
              label="Start Date"
              value={exp.start}
              onChange={(v) => update(i, "start", v)}
            />
            <Input
              label="End Date"
              value={exp.end}
              onChange={(v) => update(i, "end", v)}
            />
          </div>

          <button
            type="button"
            onClick={() => remove(i)}
            className="text-sm text-red-600"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={add}
        className="text-sm text-blue-600"
      >
        + Add experience
      </button>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="text-xs text-gray-500">{label}</label>
      <input
        className="w-full border p-2 rounded"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
