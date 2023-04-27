import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <div className="flex justify-end gap-4 p-5">
      <Link href={"/"}>Home</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/blog"}>Blog</Link>

      {status === "authenticated" ? (
        <p
          className="cursor-pointer"
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </p>
      ) : status === "unauthenticated" ? (
        <p
          className="cursor-pointer"
          onClick={() => {
            signIn();
          }}
        >
          Sign In
        </p>
      ) : null}
    </div>
  );
}
