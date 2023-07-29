import { client } from "@/lib/client";
import { GetStaticProps, NextPage } from "next";
import Image from "next/image";

type Props = {
  data: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    eyecatch: {
      url: string;
      height: number;
      width: number;
    };
    content: string;
  };
};

const NewsDetail: NextPage<Props> = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.data.content }} />
      <Image
        src={props.data.eyecatch.url}
        width={500}
        height={500}
        alt={""}
      ></Image>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await client.get({ endpoint: "news", queries: { limit: 1000 } });
  const params = res.contents.map((post: { id: string }) => ({
    params: { id: post.id },
  }));
  return {
    paths: params,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await client.get({ endpoint: "news", contentId: params.id });

  return {
    props: {
      data: res,
    },
  };
};

export default NewsDetail;
