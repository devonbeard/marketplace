import type { ProvenanceEvent } from "@/lib/data";
import { formatRelativeTime, formatSol } from "@/lib/utils";

type ProvenanceTimelineProps = {
  events: ProvenanceEvent[];
};

const labels: Record<ProvenanceEvent["type"], string> = {
  mint: "Minted",
  transfer: "Transferred",
  listing: "Listed",
  sale: "Sold",
};

export function ProvenanceTimeline({ events }: ProvenanceTimelineProps) {
  return (
    <ol className="space-y-6">
      {events.map((event, i) => (
        <li key={event.id} className="relative pl-6">
          {i < events.length - 1 && (
            <span
              className="absolute left-[5px] top-5 h-full w-px bg-white/10"
              aria-hidden
            />
          )}
          <span
            className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border border-white/20 bg-surface-elevated"
            aria-hidden
          />
          <p className="text-sm font-medium text-text-primary">
            {labels[event.type]}
          </p>
          <p className="mt-0.5 text-xs text-text-muted">
            {formatRelativeTime(event.date)}
            {event.price !== undefined && (
              <span className="ml-2 font-mono tabular-nums text-text-subtle">
                {formatSol(event.price)} SOL
              </span>
            )}
          </p>
          {(event.from || event.to) && (
            <p className="mt-0.5 font-mono text-[11px] text-text-subtle">
              {event.from && <span>{event.from}</span>}
              {event.from && event.to && <span> → </span>}
              {event.to && <span>{event.to}</span>}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}
