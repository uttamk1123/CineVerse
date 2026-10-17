import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from './Image';
export const Card = ({ movie }) => {
    const { id, original_title, overview, vote_average, poster_path } = movie;
    return (

        <div className="block max-w-sm p-6 m-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700" id={id}>
            <Link to={`/movie/${id}`}>

                <Image className="rounded-lg" src={`https://image.tmdb.org/t/p/original${poster_path}`} title={movie.title} />
            </Link>
            <Link to={`/movie/${id}`}>
                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
            </Link>
            <p className="mb-6 text-gray-700 dark:text-gray-300">{overview}</p>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{vote_average}</span>
        </div>
    )
}
