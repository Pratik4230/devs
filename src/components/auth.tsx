"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";

const Auth = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <>
          <h1>Welocome Back</h1>
          <Button onClick={() => signOut()}>Sign out</Button>
        </>
      ) : (
        <>
          <h1>Login here</h1>

          <Button onClick={() => signIn("github")}>Github</Button>
          <Button onClick={() => signIn("google")}>Google</Button>
        </>
      )}
    </>
  );
};

export default Auth;
