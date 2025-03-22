import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/layout';
import AboutPage from './pages/aboutPage/aboutPage';
import HomePage from './pages/homepage/homepage';
import FavJokesPage from './pages/favJokesPage/favJokesPage';
import { useState } from 'react';

function App() {

  const [likedJokes, setLikedJokes] = useState([]);

  const addLikedJoke = (newJoke) => {
    setLikedJokes([newJoke, ...likedJokes])
    //console.log(newJoke);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage addLikedJoke={addLikedJoke} />
        },
        {
          path: "/favorite-jokes",
          element: <FavJokesPage likedJokes={likedJokes} />
        },
        {
          path: "/about",
          element: <AboutPage />
        }
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
