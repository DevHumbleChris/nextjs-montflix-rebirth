import axios from "axios";
import Head from "next/head";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Montflix Rebirth</title>
        <meta name="description" content="Montflix Rebirth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Results results={results}/>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const genre = query.genre;
  const request = await axios.get(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.trending.url
    }`
  ).then((res) => res.data);

  return {
    props: {
      results: request.results,
    },
  };
}
