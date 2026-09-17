import type { ReactNode } from "react";

export function SectionHeading({
  kicker,
  title,
  action,
}: {
  kicker: string;
  title: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <p className="mb-3 font-mono text-sm text-quantum">// {kicker}</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-bright sm:text-4xl">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}
