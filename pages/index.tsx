import { useSession } from "next-auth/react";
import React from "react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div>
      {status === "authenticated" && session.user ? (
        <div>
          <p>{session.user.email}</p>
          <p>{session.user.image}</p>
          <p>{session.user.name}</p>
        </div>
      ) : (
        <p>Home</p>
      )}
    </div>
  );
}
