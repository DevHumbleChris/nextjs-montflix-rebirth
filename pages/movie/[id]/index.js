import Head from "next/head";
import Image from "next/image";
import React from "react";
import axios from 'axios'

export default function index({ result, castResult }) {
  console.log(castResult);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      <Head>
        <title>Montflix Rebirth - {result?.title}</title>
        <meta name="description" content="Montflix Rebirth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div
          className="banner relative"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/w500${result?.backdrop_path}")`,
            backgroundPosition: "center center",
          }}
        >
          <div className="banner_contents">
            <h3 className="banner_title">{result?.title}</h3>
            <div className="buttons">
              <button className="banner_button">Watch Trailer</button>
            </div>
            <h4 className="banner_description">
              {truncate(result?.overview, 150)}
            </h4>
          </div>
          <div class="absolute inset-0 opacity-40 bg-gradient-to-t from-black to-transparent overflow-hidden"></div>
        </div>
        <div className="grid sm:grid-cols-8 p-3 my-2">
          <div className="col-span-6">
            <h2 className="text-4xl">
              {result.title}{" "}
              <span className="text-gray-400">
                ({result.release_date.split("-")[0]})
              </span>
            </h2>
            <div className="flex space-x-2 items-center p-1">
              <p>{result.release_date}</p>
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <p className="space-x-1">
                {result.genres.map((genre, index) => {
                  return (
                    <span key={genre.id}>
                      {genre.name}
                      {index < result.genres.length - 1 ? "," : "."}
                    </span>
                  );
                })}
              </p>
            </div>
            <p className="italic text-gray-300 text-lg">{result.tagline}</p>
            <div className="my-3">
              <p className="text-xl my-2">Overview</p>
              <p>{result.overview}</p>
            </div>
            <div className="my-2">
              <h3 className="text-xl my-3">Top Billed Cast</h3>
              <div>
                {castResult.cast.map((actor) => {
                  console.log(actor);
                })}
              </div>
              <div className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
                <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
                  <a
                    href="#"
                    title=""
                    className="flex shrink-0 aspect-w-4 aspect-h-3"
                  >
                    <Image
                      className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                      width="400"
                      height="400"
                      src="https://www.themoviedb.org/t/p/w138_and_h175_face/hCi43gRO7zfv3Mu8X1bpqtloyHT.jpg"
                      alt="thumbnail-3"
                    />
                  </a>
                  <div className="flex-1 px-4 py-5 sm:p-6">
                    <p className="text-sm font-bold text-gray-900">
                      How to write content about your photographs
                    </p>
                    <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">he</div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  ).then((res) => res.data);
  const castResult = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.API_KEY}=en-US`
  ).then((res) => res.data);
  return {
    props: {
      result,
      castResult,
    },
  };
}
