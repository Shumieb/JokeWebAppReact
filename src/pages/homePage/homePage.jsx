import React, { useEffect, useState } from 'react'
import JokeCard from '../../components/JokeCard/jokeCard';

function HomePage() {

    const [showPunchline, setShowPunchline] = useState(false);
    const [currentJoke, setCurrentJoke] = useState({})

    useEffect(() => {
        getRandomJoke();
    }, []);

    const getRandomJoke = async () => {
        try {
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            if (json) {
                setCurrentJoke({ "type": json.type, "punchline": json.punchline, "setup": json.setup });
            }

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
            <p className='fs-3 text-primary-emphasis mb-4'>Joke App</p>
            <JokeCard
                currentJoke={currentJoke}
                showPunchline={showPunchline}
                handleDisplayPunchline={handleDisplayPunchline}
                handleDisplayNextJoke={handleDisplayNextJoke}
            />
        </main>
    )
}

export default HomePage