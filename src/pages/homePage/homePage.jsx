import React, { useState } from 'react'
import JokeCard from '../../components/JokeCard/jokeCard';

function HomePage() {

    const [showPunchline, setShowPunchline] = useState(false);

    const handleDisplayPunchline = () => {
        setShowPunchline(!showPunchline);
    }

    const handleDisplayNextJoke = () => {
        setShowPunchline(!showPunchline);
    }

    return (
        <main className='container text-center'>
            <p className='fs-3 text-primary-emphasis mb-4'>Joke App</p>
            <JokeCard
                showPunchline={showPunchline}
                handleDisplayPunchline={handleDisplayPunchline}
                handleDisplayNextJoke={handleDisplayNextJoke}
            />
        </main>
    )
}

export default HomePage