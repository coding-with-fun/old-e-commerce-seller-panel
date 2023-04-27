import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

const Blog = ({ data }: IProps) => {
  return <div>Authorized blogs</div>;
};

export default Blog;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

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
