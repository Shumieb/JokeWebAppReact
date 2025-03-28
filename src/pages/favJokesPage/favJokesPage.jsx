import FavJokeCard from '../../components/FavJokeCard/favJokeCard'
import { useFavJokes } from '../../context/favJokeContext'

function FavJokesPage() {

    const { favJokes } = useFavJokes();

    if (!favJokes) {
        return (
            <main className='container text-center custom-vh-75'>
                <p className='fs-3 text-primary-emphasis mb-4'>Favourite Jokes</p>
                <p className='fs-5 text-primary-emphasis'>No favourite Jokes</p>
            </main>
        )
    }

    return (
        <main className='container text-center custom-vh-75'>
            <p className='fs-3 text-primary-emphasis mb-4'>Favourite Jokes</p>
            <section>
                {
                    favJokes.map((joke) => {
                        return (
                            <div className='card mt-2 mb-4 py-3 bg-primary text-white' key={joke.id}>
                                <FavJokeCard joke={joke} />
                            </div>
                        )
                    })
                }
            </section>
        </main>
    )
}

export default FavJokesPage