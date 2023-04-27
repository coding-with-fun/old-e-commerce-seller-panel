import { useSession } from "next-auth/react";

const Outlet = ({ children }: IProps) => {
  const { data: session, status } = useSession();

  return status === "loading" ? null : <div>{children}</div>;
};

export default Outlet;

interface IProps {
  children: JSX.Element[] | JSX.Element | null;
}
