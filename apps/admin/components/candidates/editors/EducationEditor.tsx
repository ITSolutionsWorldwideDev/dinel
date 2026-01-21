// apps/admin/components/candidates/editors/EducationEditor.tsx
"use client";

type Education = {
  institution: string;
  degree?: string;
  start?: string;
  end?: string;
};

export default function EducationEditor({
  value,
  onChange,
}: {
  value: Education[];
  onChange: (v: Education[]) => void;
}) {
  function update(index: number, field: keyof Education, val: string) {
    const next = [...value];
    next[index] = { ...next[index], [field]: val };
    onChange(next);
  }

  function add() {
    onChange([
      ...value,
      { institution: "", degree: "", start: "", end: "" },
    ]);
  }

  function remove(index: number) {
    onChange(value.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-4">
      {value.map((edu, i) => (
        <div key={i} className="border rounded p-4 space-y-2">
          <Input
            label="Institution"
            value={edu.institution}
            onChange={(v) => update(i, "institution", v)}
          />

          <Input
            label="Degree"
            value={edu.degree}
            onChange={(v) => update(i, "degree", v)}
          />

          <div className="grid grid-cols-2 gap-2">
            <Input
              label="Start Date"
              value={edu.start}
              onChange={(v) => update(i, "start", v)}
            />
            <Input
              label="End Date"
              value={edu.end}
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
        + Add education
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
