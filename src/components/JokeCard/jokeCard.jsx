import { BsFillHandThumbsUpFill, BsEmojiLaughingFill, BsEmojiSmileFill, BsEmojiSmileUpsideDownFill, BsEmojiSunglassesFill } from "react-icons/bs"
import { useFavJokes } from '../../context/favJokeContext'

function JokeCard({ currentJoke, showPunchline, handleDisplayPunchline, handleDisplayNextJoke }) {

    const { addLikedJoke } = useFavJokes();

    const handleLikeJoke = () => {
        addLikedJoke(currentJoke);
    }

    return (
        <section className='my-md-5 p-1 p-md-2 mx-auto custom-min-joke-card-w'>
            <div className="mb-md-2 px-1 px-md-2 p-md-2 mx-auto">
                <p className='fs-3 text-capitalize text-primary-emphasis px-2'>
                    {currentJoke.type.length > 0 ? currentJoke.type + " Joke" : "Loading Joke...."}
                </p>
            </div>
            <div className='row p-md-2 mx-auto'>
                <div className="col-sm-12 col-lg-6 px-1 mx-auto">
                    <div className='text-start px-2 py-lg-4 mx-auto'>
                        <p className='fs-3 text-primary-emphasis opacity-75 mt-lg-5'>Set Up</p>
                        <p className='fs-5 pb-2 text-primary-emphasis'>
                            {currentJoke.setup.length > 0 ? currentJoke.setup : "Loading Joke...."}
                        </p>
                        {
                            !showPunchline &&
                            (
                                <button
                                    className='btn btn-primary text-white mt-1 fs-5'
                                    onClick={handleDisplayPunchline}
                                >
                                    Punchline
                                </button>
                            )
                        }
                    </div>
                </div>
                <div className="card col-sm-12 col-lg-6 p-2 mx-auto bg-primary text-white custom-min-punchline-h">
                    {
                        !showPunchline &&
                        (
                            <>
                                <div className="h-100 d-flex flex-column justify-content-center">
                                    <div className="d-flex justify-content-around align-items-center">
                                        <span className="fs-4 bounce-in"><BsEmojiLaughingFill /></span>
                                        <span className="fs-4 rotate-two"><BsEmojiSmileFill /></span>
                                        <span className="fs-4 rotate"><BsEmojiSmileUpsideDownFill /></span>
                                        <span className="fs-4 bounce-side"><BsEmojiSunglassesFill /></span>
                                    </div>
                                </div>
                            </>

                        )
                    }
                    {
                        showPunchline &&
                        (<div className='card-body mt-4 d-flex flex-column justify-content-between'>
                            <div>
                                <p className='fs-4 opacity-75'>Punchline</p>
                                <p className='fs-5 pb-2'>{currentJoke.punchline}</p>
                            </div>
                            <div className='d-flex justify-content-between mt-1'>
                                <button
                                    className='btn btn-light text-primary-emphasis fs-5'
                                    onClick={handleDisplayNextJoke}
                                >
                                    Next Joke
                                </button>
                                <button
                                    className='btn btn-light text-primary-emphasis me-2 fs-5 d-flex justify-content-between align-items-center'
                                    onClick={() => handleLikeJoke(currentJoke)}
                                >
                                    <span className='d-block mx-1'>Like</span>
                                    <span className='d-block mx-1 pb-1'><BsFillHandThumbsUpFill /></span>
                                </button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    )
}

export default JokeCard