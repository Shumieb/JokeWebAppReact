import React, { useEffect } from 'react';
import LandingPage from '../../components/LandingPage/landingPage';
import { useFavJokes } from '../../context/favJokeContext'

function HomePage() {

    const { setInitJokes, favJokes } = useFavJokes();

    useEffect(() => {
        let savedFavJokes = JSON.parse(localStorage.getItem("favouriteJokes"));
        if (savedFavJokes && favJokes) {
            if (savedFavJokes.length > 0 && favJokes.length <= 0) {
                setInitJokes(savedFavJokes)
            };
        }
    }, [])

    return (
        <main className='container text-center custom-vh-75'>
            <LandingPage />
        </main >
    )
}

export default HomePage