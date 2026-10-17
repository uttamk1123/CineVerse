
import { Card } from '../components'
import { useFetch } from '../hooks/useFetch';

export const MoviesList = ({ apiPath }) => {

    const { data: movies } = useFetch(apiPath);

    return (
        <main>
            <section className='max-w-7xl mx-auto py-7'>
                <div className='flex justify-start flex-wrap'>
                    {
                        movies.map((movie) => (
                            <Card movie={movie} key={movie.id} />
                        ))
                    }

                </div>
            </section>
        </main>
    )
}
