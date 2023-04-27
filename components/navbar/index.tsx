import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { status } = useSession();

  return (
    <div className="flex justify-end gap-4 p-5">
      <Link href={"/"}>Home</Link>
      {status === "authenticated" ? (
        <Link href={"/dashboard"}>Dashboard</Link>
      ) : null}
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
