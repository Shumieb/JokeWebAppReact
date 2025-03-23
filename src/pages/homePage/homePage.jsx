import React, { useEffect, useState, memo } from 'react'
import JokeCard from '../../components/JokeCard/jokeCard';
import LandingPage from '../../components/LandingPage/landingPage';

function HomePage({ addLikedJoke }) {

    const [showPunchline, setShowPunchline] = useState(false);
    const [currentJoke, setCurrentJoke] = useState({});
    const [getNewJoke, setGetNewJoke] = useState(false);

    useEffect(() => {
        if (getNewJoke) {
            getRandomJoke();
        }
    }, []);

    const getRandomJoke = async () => {
        try {
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            if (json) {
                setCurrentJoke({ "id": json.id, "type": json.type, "punchline": json.punchline, "setup": json.setup });
                setGetNewJoke(false);
            }
            console.log(json);


        } catch (e) {
            console.log(e);
        }
    }

    const handleDisplayPunchline = () => {
        setShowPunchline(!showPunchline);
    }

    const handleDisplayNextJoke = () => {
        getRandomJoke();
        setShowPunchline(!showPunchline);
    }

    return (
        <main className='container text-center custom-vh-75'>
            {
                Object.keys(currentJoke).length === 0 ?
                    <LandingPage getRandomJoke={getRandomJoke} /> :
                    (
                        <>
                            <JokeCard
                                currentJoke={currentJoke}
                                showPunchline={showPunchline}
                                handleDisplayPunchline={handleDisplayPunchline}
                                handleDisplayNextJoke={handleDisplayNextJoke}
                                addLikedJoke={addLikedJoke}
                            />
                        </>
                    )
            }
        </main >
    )
}

export default memo(HomePage)