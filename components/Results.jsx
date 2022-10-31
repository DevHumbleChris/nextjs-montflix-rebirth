import Thumbnail from "./Thumbnail";

export default function Result({ results }) {
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-5 xl:grid-cols-6 3xl:flex flex-wrap justify-center">
            {results.map(result => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </div>
    )
}
