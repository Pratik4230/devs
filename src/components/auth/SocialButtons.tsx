"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SocialButtons() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Button
        type="button"
        variant="secondary"
        className="flex items-center justify-center gap-2 cursor-pointer"
        onClick={() => signIn("github", { callbackUrl: "/" })}
      >
        Github
      </Button>
      <Button
        type="button"
        variant="secondary"
        className="flex items-center justify-center gap-2 cursor-pointer"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        Google
      </Button>
    </div>
  );
}
