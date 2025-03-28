import { BsEmojiSunglassesFill, BsEmojiLaughingFill, BsEmojiSmileUpsideDownFill, BsEmojiWinkFill } from "react-icons/bs";
import { Link } from "react-router";
import React from "react";

function LandingPage() {
    return (
        <div className='row my-auto'>
            <div className="d-block d-md-none py-5 bg-inherit"></div>
            <div className='col-lg-6 col-sm-12 d-flex flex-column justify-content-center align-items-center py-2'>
                <div className="text-primary-emphasis mb-2 p-2 w-75 mx-auto d-flex justify-content-around">
                    <span className="fs-4 mx-2 d-block bounce-in"><BsEmojiSunglassesFill /></span>
                    <span className="fs-4 mx-2 d-block fade"><BsEmojiLaughingFill /></span>
                    <span className="fs-4 mx-2 d-block rotate"><BsEmojiSmileUpsideDownFill /></span>
                    <span className="fs-4 mx-2 d-block bounce-side"><BsEmojiWinkFill /></span>
                </div>
                <p className='fs-3 text-primary-emphasis mb-4'>Joke App</p>
                <p className='fs-5 text-primary-emphasis mb-2 pt-1 pb-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet alias at officiis dolores quas ipsum dolore voluptates assumenda?
                    Est, sit.
                </p>
                <Link
                    to="/joke"
                    className='btn btn-primary fs-5 px-4 py-2'
                >
                    Get Joke
                </Link>
            </div>
            <div className='d-none d-md-block col-md-12 col-lg-6 custom-img-container mt-md-5 bg-primary p-0 rounded border border-primary border-opacity-25'>
                <img
                    src="https://images.pexels.com/photos/16838917/pexels-photo-16838917/free-photo-of-repeat-until-funny.jpeg"
                    alt=""
                    className="img-fluid rounded w-100 h-100 custom-img"
                />
            </div>
        </div>
    )
}

export default LandingPage