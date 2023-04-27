import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

export default function Dashboard() {
  const { push } = useRouter();

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="font-bold">Loading...</div>;
  } else if (status === "unauthenticated") {
    push("/");
  } else {
    return <div>Dashboard</div>;
  }
}
