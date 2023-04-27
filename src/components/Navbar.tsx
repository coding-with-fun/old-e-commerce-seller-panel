import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between px-4 py-5">
      <div></div>
      <div className="flex gap-4">
        <Link href={"/"}>Home</Link>

        <Link href={"/dashboard"}>Dashboard</Link>

        <Link href={"/blog"}>Blog</Link>
      </div>
    </div>
  );
}
