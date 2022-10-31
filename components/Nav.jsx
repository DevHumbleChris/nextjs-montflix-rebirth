import { useRouter } from "next/router";
import React from "react";
import requests from "../utils/requests";

export default function Nav() {
  const router = useRouter();
  return (
    <nav>
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <h2
              key={key}
              className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
              onClick={() => router.push(`/?genre=${key}`)}
            >
              {title}
            </h2>
          );
        })}
      </div>
    </nav>
  );
}
