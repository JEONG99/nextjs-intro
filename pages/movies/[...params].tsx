import Seo from "@/components/Seo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

interface DetailPageQuery extends ParsedUrlQuery {
  params: string[];
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params } = ctx.params as DetailPageQuery;
  return {
    props: {
      params,
    },
  };
};

export default function Detail({
  params,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();
  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      <h1>{title}</h1>
    </div>
  );
}
