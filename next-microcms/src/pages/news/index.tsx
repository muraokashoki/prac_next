import { NextPageWithLayout } from "next";
import DefaultLayout from "@/components/layout/default-layout";

const News: NextPageWithLayout = () => {
  return (
    <>
      <h1>News</h1>
    </>
  );
};

News.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default News;
