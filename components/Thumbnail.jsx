import Image from "next/image";
import React from "react";

export default function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  console.log(result);
  return (
    <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:scale-105 hover:z-50 my-4mx-2 rounded-xl">
      <Image
        layout="responsive"
        className="rounded-xl"
        src={`${BASE_URL}${result.poster_path || result.backdrop_path}`}
        height={1080}
        width={1920}
        alt={`${result.title || result.name}`}
      />
      <div className="p-2">
        <h2 className="mt-1 text-sm text-white">
          {result.title || result.name}
        </h2>
        <h3 className="text-xs text-green-600"> {result.release_date || result.first_air_date}</h3>
      </div>
    </div>
  );
}
