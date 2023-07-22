// import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
// import{client} from '@/lib/client'

// const NewsDetail : NextPage = (props) =>{
//     return()

// }

// export const getstaticPaths : GetStaticPaths = async () => {
//     const res = await client.get({endpoints: ,queries: {limit: 1000}})
//     const params = res contents.map((post) => ({
//         params: {id: post:id}
//     }))
//     return{
//         paths: params,
//         fallback: false,
//     }

// }

// export const getStaticProps : GetStaticProps = async({params}) => {
//     const res = await client.get({endpoint:'news',contentId: params.id})

//     rerturn
// }

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "@/lib/client";
import Image from "next/image";
import Button from "@/components/atoms/button";
import { idText } from "typescript";

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

const NewsDetail: NextPage<Props> = (props) => {
  console.log(props);

  return (
    <>
      <h1>{props.data.title}</h1>

      <Image
        src={props.data.eyecatch.url}
        width={1000}
        height={500}
        alt={""}
      ></Image>
      <div dangerouslySetInnerHTML={{ __html: props.data.content }}></div>

      <Button label={"top"} href={"/"} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.get({ endpoint: "news", queries: { limit: 1000 } });

  const paths = res.contents.map((post: string) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
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
