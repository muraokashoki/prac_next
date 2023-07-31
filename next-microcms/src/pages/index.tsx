import styled from "styled-components";
import { GetStaticProps, NextPageWithLayout } from "next";
import { client } from "@/lib/client";
import DefaultLayout from "@/components/layout/default-layout";

type Props = {
  data: {
    content: string;
    createdAt: string;
    eyecatch: {
      url: string;
      height: string;
      width: string;
    };
    id: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    updatedAt: string;
  };
};

const Home: NextPageWithLayout<Props> = (props) => {
  console.log(props);
  return (
    <>
      <Main></Main>
    </>
  );
};

const Main = styled.main``;

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.get({ endpoint: "news" });
  return {
    props: {
      date: res.contents,
    },
  };
};

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Home;
