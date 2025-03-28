import { createContext, useState, useContext } from 'react';

const FavJokeContext = createContext([]);

export const FavJokeProvider = ({ children }) => {
    const [favJokes, setFavJokes] = useState([]);

    const setInitJokes = (initJokes) => {
        setFavJokes([...initJokes]);
    }

    const addLikedJoke = (newJoke) => {
        let included = favJokes.find(joke => joke.id == newJoke.id)
        if (!included) {
            let newLikedJokes = [newJoke, ...favJokes];
            setFavJokes([...newLikedJokes])
            localStorage.setItem("favouriteJokes", JSON.stringify(newLikedJokes));
        }
    }

    const removeLikedJoke = (id) => {
        let newLikedJokes = favJokes.filter(joke => joke.id !== id)
        setFavJokes([...newLikedJokes])
        localStorage.setItem("favouriteJokes", JSON.stringify(newLikedJokes));
    }

    return (
        <FavJokeContext.Provider value={{
            favJokes,
            addLikedJoke,
            removeLikedJoke,
            setInitJokes
        }}>
            {children}
        </FavJokeContext.Provider>
    );
}

export const useFavJokes = () => useContext(FavJokeContext);
