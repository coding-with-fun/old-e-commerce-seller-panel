import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

const Blog = ({ data }: IProps) => {
  return data.user ? (
    <div>Authorized blogs</div>
  ) : (
    <div>Unauthorized blogs</div>
  );
};

export default Blog;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
      data: {
        ...session,
      },
    },
  };
};

interface IProps {
  session: Session;
  data: Session;
}
