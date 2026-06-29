import type { LegalSection } from "@/lib/legal";

export function LegalSections({ sections }: { sections: LegalSection[] }) {
  return (
    <>
      {sections.map((s) => (
        <div key={s.heading}>
          <h2 className="text-xl font-bold text-heading">{s.heading}</h2>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">{s.body}</p>
          {s.subsections?.map((sub) => (
            <div key={sub.heading} className="mt-6 border-l-2 border-accent/20 pl-5">
              <h3 className="text-base font-semibold text-heading">{sub.heading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{sub.body}</p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
