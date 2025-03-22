import React from 'react'
import { BsTrashFill } from "react-icons/bs";

function FavJokeCard({ joke, removeLikedJoke }) {
    return (
        <div className='card-body text-start'>
            <p className='fs-4 text-capitalize'>{joke.type} Joke</p>
            <p className='fs-4 opacity-75'>Set Up</p>
            <p className='fs-5 pb-2'>{joke.setup}</p>
            <p className='fs-4 opacity-75'>Punchline</p>
            <p className='fs-5 pb-2'>{joke.punchline}</p>
            <button
                onClick={() => removeLikedJoke(joke.id)}
                className='btn btn-danger text-white fs-5 float-end d-flex justify-content-between align-items-center'>
                <span className='d-block mx-1 pb-1'><BsTrashFill /></span>
                <span className='d-block mx-1'>Remove From Favourites</span>
            </button>
        </div>
    )
}

export default FavJokeCard