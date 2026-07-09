import type { NftAttribute } from "@/lib/data";

type AttributeChipsProps = {
  attributes: NftAttribute[];
};

export function AttributeChips({ attributes }: AttributeChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {attributes.map((attr) => (
        <div
          key={attr.trait}
          className="rounded-full border border-[var(--hairline)] bg-surface-elevated px-4 py-2"
        >
          <p className="caption">{attr.trait}</p>
          <p className="mt-0.5 text-sm text-text-primary">{attr.value}</p>
        </div>
      ))}
    </div>
  );
}
