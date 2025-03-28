import React, { useEffect, useState } from 'react'
import JokeCard from '../../components/JokeCard/jokeCard'

function JokePage({ addLikedJoke }) {

    const [showPunchline, setShowPunchline] = useState(false)
    const [currentJoke, setCurrentJoke] = useState(
        {
            "id": 0,
            "type": "",
            "punchline": "",
            "setup": ""
        })

    useEffect(() => {
        if (currentJoke.id !== 0) localStorage.setItem("currentJokeId", currentJoke.id)
    }, [currentJoke])

    useEffect(() => {
        let jokeId = Number(localStorage.getItem("currentJokeId"));
        jokeId === 0 ? getRandomJoke() : getRandomJokeById(jokeId);
    }, []);

    const getRandomJoke = async () => {
        try {
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            if (json) {
                setCurrentJoke(
                    {
                        "id": json.id,
                        "type": json.type,
                        "punchline": json.punchline,
                        "setup": json.setup
                    });
            }

        } catch (e) {
            console.log(e);
        }
    }

    const getRandomJokeById = async (jokeId) => {
        try {
            const response = await fetch(`https://official-joke-api.appspot.com/jokes/${jokeId}`);

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            if (json) {
                setCurrentJoke(
                    {
                        "id": json.id,
                        "type": json.type,
                        "punchline": json.punchline,
                        "setup": json.setup
                    });
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
        <div className='container custom-min-vh-71 my-2'>
            <JokeCard
                currentJoke={currentJoke}
                showPunchline={showPunchline}
                handleDisplayPunchline={handleDisplayPunchline}
                handleDisplayNextJoke={handleDisplayNextJoke}
                addLikedJoke={addLikedJoke}
            />
        </div>
    )
}

export default JokePage