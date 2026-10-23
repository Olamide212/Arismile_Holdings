"use client";

import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { TeamMember } from "@/lib/content/team";
import { reveal, stagger } from "@/lib/reveal";

interface TeamGridProps {
  members: TeamMember[];
}

/** Leadership cards; "Read more" opens a modal with the member's full profile. */
export function TeamGrid({ members }: TeamGridProps) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member, i) => (
          <li key={member.name} {...reveal("up", stagger(i))}>
            <TeamCard member={member} onOpen={() => setSelected(i)} />
          </li>
        ))}
      </ul>
      <TeamModal members={members} index={selected} onChange={setSelected} />
    </>
  );
}

function TeamCard({ member, onOpen }: { member: TeamMember; onOpen: () => void }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl bg-[#f1f1f1] p-5 shadow-[0_4px_18px_rgb(0_0_0/0.06)] transition-colors duration-300 focus-within:bg-brand-yellow hover:bg-brand-yellow">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#fff4cc]">
        <Image
          src={member.photo.src}
          alt={member.photo.alt}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover object-[50%_30%] transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <h3 className="mt-5 text-[22px] font-semibold leading-snug text-brand-green transition-colors group-focus-within:text-ink group-hover:text-ink">
        {member.name}
      </h3>
      <p className="mt-2 text-[16px] leading-relaxed text-body transition-colors group-focus-within:text-ink group-hover:text-ink">
        {member.role}
      </p>
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        className="mt-auto inline-flex items-center gap-2 self-start pt-6 text-[15px] font-bold uppercase text-brand-green transition-colors after:absolute after:inset-0 after:rounded-2xl group-focus-within:text-ink group-hover:text-ink focus-visible:outline-none"
      >
        Read More<span className="sr-only"> about {member.name}</span>
        <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
      </button>
    </article>
  );
}

function TeamModal({
  members,
  index,
  onChange,
}: {
  members: TeamMember[];
  index: number | null;
  onChange: (index: number | null) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const member = index == null ? null : members[index];

  // Keep the native <dialog> in sync with the selected member.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (member && !dialog.open) dialog.showModal();
    if (!member && dialog.open) dialog.close();
  }, [member]);

  const count = members.length;
  const go = (step: 1 | -1) => {
    if (index != null) onChange((index + step + count) % count);
  };
  const prev = index == null ? null : members[(index - 1 + count) % count];
  const next = index == null ? null : members[(index + 1) % count];

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="team-modal-name"
      onClose={() => onChange(null)}
      onClick={(event) => {
        // Clicking the backdrop (the dialog element itself) closes it.
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") go(1);
        if (event.key === "ArrowLeft") go(-1);
      }}
      className="team-dialog m-auto max-h-[calc(100dvh-2rem)] w-[min(960px,calc(100%-2rem))] overflow-hidden rounded-2xl bg-white p-0 text-black shadow-2xl backdrop:bg-black/70"
    >
      {member ? (
        <div className="relative grid max-h-[calc(100dvh-2rem)] overflow-y-auto md:grid-cols-[2fr_3fr] md:overflow-hidden">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 inline-flex size-10 items-center justify-center rounded-full bg-white/90 text-ink shadow transition-colors hover:bg-brand-yellow"
          >
            <X aria-hidden className="size-5" />
          </button>

          <div className="relative h-72 shrink-0 bg-[#fff4cc] sm:h-96 md:h-auto md:min-h-[480px]">
            <Image
              key={member.photo.src}
              src={member.photo.src}
              alt={member.photo.alt}
              fill
              sizes="(min-width: 768px) 380px, 100vw"
              className="object-cover object-[50%_30%]"
            />
          </div>

          <div className="flex min-h-0 flex-col p-6 sm:p-10 md:overflow-y-auto">
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-green">
              Arismile Holdings Leadership
            </p>
            <h2 id="team-modal-name" className="mt-2 pr-10 text-[28px] font-bold uppercase leading-tight md:text-[34px]">
              {member.name}
            </h2>
            <p className="mt-3 inline-flex self-start rounded-full bg-brand-yellow px-4 py-1.5 text-[13px] font-semibold uppercase tracking-wide text-ink">
              {member.role}
            </p>
            <hr className="my-6 border-0 border-t border-heading-muted/60" />
            <div className="space-y-4 text-[15px] leading-[1.8] text-body">
              {member.bio.split("\n\n").map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            {count > 1 && prev && next ? (
              <div className="mt-auto flex items-center justify-between gap-4 border-t border-black/10 pt-6 text-[13px] font-semibold uppercase">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="inline-flex items-center gap-2 text-body transition-colors hover:text-brand-green"
                >
                  <ArrowLeft aria-hidden className="size-4" />
                  <span className="sr-only">Previous: {prev.name}</span>
                  <span aria-hidden className="hidden sm:inline">{prev.name}</span>
                  <span aria-hidden className="sm:hidden">Prev</span>
                </button>
                <span aria-hidden className="shrink-0 text-black/40">
                  {(index ?? 0) + 1} / {count}
                </span>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="inline-flex items-center gap-2 text-right text-body transition-colors hover:text-brand-green"
                >
                  <span className="sr-only">Next: {next.name}</span>
                  <span aria-hidden className="hidden sm:inline">{next.name}</span>
                  <span aria-hidden className="sm:hidden">Next</span>
                  <ArrowRight aria-hidden className="size-4" />
                </button>
              </div>
            ) : null}
          </div>

        </div>
      ) : null}
    </dialog>
  );
}
