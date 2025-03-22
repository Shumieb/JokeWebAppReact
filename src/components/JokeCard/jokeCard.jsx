import React from 'react'

function JokeCard({ currentJoke, showPunchline, handleDisplayPunchline, handleDisplayNextJoke }) {
    return (
        <section className='card bg-primary text-white mb-5 pt-1 pb-3'>
            <div className='card-body text-start'>
                {
                    currentJoke.type ? (
                        <p className='fs-4 text-capitalize'>{currentJoke.type} Joke</p>
                    ) :
                        (<p className='fs-4 text-capitalize'>Loading Joke....</p>)
                }

                <p className='fs-4 opacity-75'>Set Up</p>
                <p className='fs-5 pb-2'>{currentJoke.setup}</p>
                {
                    !showPunchline &&
                    (
                        <button
                            className='btn btn-light text-primary-emphasis mt-1 fs-5'
                            onClick={handleDisplayPunchline}
                        >
                            Punchline
                        </button>
                    )
                }
                {
                    showPunchline &&
                    (<div className='mt-4'>
                        <p className='fs-4 opacity-75'>Punchline</p>
                        <p className='fs-5 pb-2'>{currentJoke.punchline}</p>
                        <div className='d-flex justify-content-between mt-1'>
                            <button
                                className='btn btn-light text-primary-emphasis fs-5'
                                onClick={handleDisplayNextJoke}
                            >
                                Next Joke
                            </button>
                            <button className='btn btn-light text-primary-emphasis me-2 fs-5'>
                                Like
                            </button>
                        </div>
                    </div>)
                }
            </div>
        </section>
    )
}

export default JokeCard