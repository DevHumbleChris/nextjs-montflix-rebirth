import Thumbnail from "./Thumbnail";

export default function Result({ results }) {
    return (
        <div className="px-5 my-28 grid grid-cols-2 md:grid-cols-5 xl:grid-cols-6 3xl:flex flex-wrap justify-center">
            {results.map(result => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </div>
    )
}
