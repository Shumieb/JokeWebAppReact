import React from 'react'

function FavJokesPage({ likedJokes }) {
    return (
        <main className='container text-center custom-vh-75'>
            <p className='fs-3 text-primary-emphasis mb-4'>Favourite Jokes</p>
            <section>
                {likedJokes.length <= 0 ?
                    (<p className='fs-5 text-primary-emphasis'>No favourite Jokes</p>) :
                    (
                        likedJokes.map((joke) => {
                            return (
                                <p key={joke.id}>{joke.setup}</p>
                            )
                        })
                    )}
            </section>
        </main>
    )
}

export default FavJokesPage