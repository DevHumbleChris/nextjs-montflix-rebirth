import { useRouter } from "next/router";
import React from "react";
import requests from "../utils/requests";

export default function Nav() {
  const router = useRouter();
  return (
    <nav className="bg-gradient-to-r from-[#c94b4b] to-[#4b134f] fixed w-full top-0 z-50 mb-12 p-2">
      <h1 className="font-rubik text-4xl my-2 text-center text-white">Montflix Rebirth</h1>
      <div className="flex px-4 sm:px-5 text-2xl whitespace-nowrap space-x-10 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <button
              key={key}
              className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
              onClick={() => router.push(`/?genre=${key}`)}
            >
              {title}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
