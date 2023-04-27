import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-end gap-4 p-5">
      <Link href={"/"}>Home</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/blog"}>Blog</Link>
    </div>
  );
}
