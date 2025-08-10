import React from "react";

const sampleCode = `// authentication.ts
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const auth = NextAuth({
  providers: [GitHub, Google],
});

// utils/helpers.ts
export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}`;

export default function CodeBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* softly blurred colored blobs already provided by layout; we add code overlays */}
      <div className="absolute inset-0 [mask-image:radial-gradient(70%_50%_at_50%_40%,black,transparent)]">
        <div className="absolute -left-20 top-16 w-[42rem] rotate-[-4deg] opacity-40 dark:opacity-30">
          <pre className="select-none text-xs leading-relaxed text-dark-400 dark:text-light-500/70 blur-[0.2px]">
            {sampleCode}
          </pre>
        </div>
        <div className="absolute right-0 bottom-24 w-[38rem] rotate-[2deg] opacity-35 dark:opacity-25">
          <pre className="select-none text-[11px] leading-relaxed text-dark-400 dark:text-light-500/70 blur-[0.2px]">
            {sampleCode}
          </pre>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-1/3 w-[36rem] rotate-[1deg] opacity-25 dark:opacity-20">
          <pre className="select-none text-[10px] leading-relaxed text-dark-400 dark:text-light-500/60 blur-[0.2px]">
            {sampleCode}
          </pre>
        </div>
      </div>
    </div>
  );
}
