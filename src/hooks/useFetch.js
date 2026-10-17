import { useEffect, useState } from 'react'

export const useFetch = (url, queryTerm = "") => {
    const [data, setData] = useState([]);

    console.log(process.env.REACT_APP_BASE_URL);

    useEffect(() => {
        async function GetMovies() {
            const urlPath = `${process.env.REACT_APP_BASE_URL}${url}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;
            const response = await fetch(urlPath);
            const json = await response.json();

            setData(json.results);

        }
        GetMovies();
    }, [url, queryTerm])
    return { data }
}
