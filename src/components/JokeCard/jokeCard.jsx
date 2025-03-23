import { memo } from "react"
import { BsFillHandThumbsUpFill, BsEmojiLaughingFill, BsEmojiSmileFill, BsEmojiSmileUpsideDownFill, BsEmojiSunglassesFill } from "react-icons/bs"

function JokeCard({ currentJoke, showPunchline, handleDisplayPunchline, handleDisplayNextJoke, addLikedJoke }) {

    const handleLikedJoke = () => {
        addLikedJoke(currentJoke);
    }

    return (
        <section className=' my-5 p-2 mx-auto'>
            <div className="mb-2">
                {
                    currentJoke.type ? (
                        <p className='fs-3 text-capitalize text-primary-emphasis'>
                            {currentJoke.type} Joke
                        </p>
                    ) :
                        (<p className='fs-3 text-capitalize text-primary-emphasis'>
                            Loading Joke....
                        </p>)
                }
            </div>
            <div className='row p-2 mx-auto'>
                <div className="col-6 p-1 mx-auto" style={{ minHeight: "18rem" }}>
                    <div className='mt-4 text-start py-1 px-2 h-100 w-100'>
                        <p className='fs-3 text-primary-emphasis opacity-75'>Set Up</p>
                        <p className='fs-5 pb-2 text-primary-emphasis'>{currentJoke.setup}</p>
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
                <div className="card col-6 p-2 mx-auto bg-primary text-white">
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
                        (<div className='card-body mt-4'>
                            <p className='fs-4 opacity-75'>Punchline</p>
                            <p className='fs-5 pb-2'>{currentJoke.punchline}</p>
                            <div className='d-flex justify-content-between mt-1'>
                                <button
                                    className='btn btn-light text-primary-emphasis fs-5'
                                    onClick={handleDisplayNextJoke}
                                >
                                    Next Joke
                                </button>
                                <button
                                    className='btn btn-light text-primary-emphasis me-2 fs-5 d-flex justify-content-between align-items-center'
                                    onClick={handleLikedJoke}
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

export default memo(JokeCard)