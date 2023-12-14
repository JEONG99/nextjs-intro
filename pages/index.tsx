import Seo from "@/components/Seo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  gap: 20px;
`;
const Movie = styled.div`
  cursor: pointer;
  img {
    max-width: 100%;
    border-radius: 12px;
    transition: transform 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  &:hover img {
    transform: scale(1.05) translateY(-10px);
  }
  h4 {
    font-size: 18px;
    text-align: center;
  }
`;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { results } = await (
    await fetch(`http://localhost:3001/api/movies`, options)
  ).json();
  return {
    props: {
      results,
    },
  };
};

interface IMovie {
  id: number;
  poster_path: string;
  original_title: string;
}

export default function Home({
  results,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();
  const goDetail = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <Container>
      <Seo title="Home" />
      {results?.map((movie: IMovie) => (
        <Movie
          key={movie.id}
          onClick={() => goDetail(movie.id, movie.original_title)}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </Movie>
      ))}
    </Container>
  );
}
