"use client";

import type { LeaderProfile } from "@arismile/brand";
import { cn } from "@arismile/ui";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { reveal, stagger } from "../reveal";

/** Team cards; "Read more" opens an accessible profile dialog. */
export function TeamGrid({ members, company }: { members: LeaderProfile[]; company: string }) {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <>
      <ul className={cn("grid gap-6 sm:grid-cols-2", members.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3")}>
        {members.map((m, i) => (
          <li key={m.name} {...reveal("up", stagger(i, 4))}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-(--radius) border border-fg/10 bg-surface text-fg transition-colors hover:border-accent">
              <div className="relative aspect-[4/5] overflow-hidden bg-bg">
                <Image
                  src={m.photo.src}
                  alt={m.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover object-[50%_30%] transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold leading-snug">{m.name}</h3>
                <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.15em] text-accent">{m.role}</p>
                <button
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-haspopup="dialog"
                  className="mt-auto inline-flex items-center gap-2 self-start pt-5 text-sm font-semibold uppercase tracking-wide text-accent after:absolute after:inset-0 focus-visible:outline-none"
                >
                  Read more<span className="sr-only"> about {m.name}</span>
                  <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <TeamDialog members={members} index={selected} onChange={setSelected} company={company} />
    </>
  );
}

function TeamDialog({
  members,
  index,
  onChange,
  company,
}: {
  members: LeaderProfile[];
  index: number | null;
  onChange: (i: number | null) => void;
  company: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const member = index == null ? null : members[index];

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (member && !d.open) d.showModal();
    if (!member && d.open) d.close();
  }, [member]);

  const count = members.length;
  const go = (step: 1 | -1) => {
    if (index != null) onChange((index + step + count) % count);
  };
  const prev = index == null ? null : members[(index - 1 + count) % count];
  const next = index == null ? null : members[(index + 1) % count];

  return (
    <dialog
      ref={ref}
      aria-labelledby="team-dialog-name"
      onClose={() => onChange(null)}
      onClick={(e) => {
        if (e.target === e.currentTarget) ref.current?.close();
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
      className="kit-dialog m-auto max-h-[calc(100dvh-2rem)] w-[min(960px,calc(100%-2rem))] overflow-hidden rounded-(--radius) bg-bg p-0 text-fg shadow-2xl backdrop:bg-black/70"
    >
      {member ? (
        <div className="relative grid max-h-[calc(100dvh-2rem)] overflow-y-auto md:grid-cols-[2fr_3fr] md:overflow-hidden">
          <button
            type="button"
            onClick={() => ref.current?.close()}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 inline-flex size-10 items-center justify-center rounded-full bg-bg/90 text-fg shadow hover:bg-primary hover:text-on-primary"
          >
            <X aria-hidden className="size-5" />
          </button>
          <div className="relative h-72 shrink-0 bg-surface sm:h-96 md:h-auto md:min-h-[480px]">
            <Image key={member.photo.src} src={member.photo.src} alt={member.photo.alt} fill sizes="(min-width: 768px) 380px, 100vw" className="object-cover object-[50%_30%]" />
          </div>
          <div className="flex min-h-0 flex-col p-6 sm:p-10 md:overflow-y-auto">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-accent">{company}</p>
            <h2 id="team-dialog-name" className="mt-2 pr-10 font-display text-3xl font-semibold leading-tight">
              {member.name}
            </h2>
            <p className="mt-3 inline-flex self-start rounded-full bg-primary px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-on-primary">
              {member.role}
            </p>
            <hr className="my-6 border-0 border-t border-fg/15" />
            <p className="leading-[1.8] opacity-85">{member.bio}</p>
            {count > 1 && prev && next ? (
              <div className="mt-auto flex items-center justify-between gap-4 border-t border-fg/10 pt-6 text-[13px] font-semibold uppercase">
                <button type="button" onClick={() => go(-1)} className="inline-flex items-center gap-2 opacity-75 hover:text-accent hover:opacity-100">
                  <ArrowLeft aria-hidden className="size-4" />
                  <span className="sr-only">Previous: {prev.name}</span>
                  <span aria-hidden className="hidden sm:inline">{prev.name}</span>
                  <span aria-hidden className="sm:hidden">Prev</span>
                </button>
                <span aria-hidden className="shrink-0 opacity-45">
                  {(index ?? 0) + 1} / {count}
                </span>
                <button type="button" onClick={() => go(1)} className="inline-flex items-center gap-2 text-right opacity-75 hover:text-accent hover:opacity-100">
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
