import Head from 'next/head'
import React from 'react'

export default function index({ result }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n-1) + "..." : str
  }
  return (
    <>
      <Head>
        <title>Montflix Rebirth - {result.name}</title>
        <meta name="description" content="Montflix Rebirth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
      <div
        className='banner relative'
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url("https://image.tmdb.org/t/p/w500${result?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className='banner_contents'>
          <h3 className='banner_title'>{result?.name }</h3>
          <div className='buttons'>
            <button className='banner_button'>Watch Trailer</button>
          </div>
          <h4 className='banner_description text-white'>
            {truncate(result?.overview, 150)}
          </h4>
        </div>
        <div class="absolute inset-0 opacity-40 bg-gradient-to-t from-black to-transparent overflow-hidden"></div>
      </div>
      </section>
    </>
  )
}

export async function getServerSideProps ({ query }) {
    const { id } = query
    const result = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}`).then(res => res.json())
    return {
        props: {
            result
        }
    }
}
