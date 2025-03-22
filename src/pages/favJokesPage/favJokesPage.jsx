import React from 'react'
import FavJokeCard from '../../components/FavJokeCard/favJokeCard'

function FavJokesPage({ likedJokes, removeLikedJoke }) {
    return (
        <main className='container text-center custom-vh-75'>
            <p className='fs-3 text-primary-emphasis mb-4'>Favourite Jokes</p>
            <section>
                {likedJokes.length <= 0 ?
                    (<p className='fs-5 text-primary-emphasis'>No favourite Jokes</p>) :
                    (
                        likedJokes.map((joke) => {
                            return (
                                <div className='card mt-2 mb-4 py-3 bg-primary text-white' key={joke.id}>
                                    <FavJokeCard joke={joke} removeLikedJoke={removeLikedJoke} />
                                </div>
                            )
                        })
                    )}
            </section>
        </main>
    )
}

export default FavJokesPage