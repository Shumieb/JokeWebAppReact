import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/layout'
import AboutPage from './pages/aboutPage/aboutPage'
import FavJokesPage from './pages/favJokesPage/favJokesPage'
import { useState } from 'react'
import JokePage from './pages/jokePage.js/jokePage'
import HomePage from './pages/homePage/homePage'

function App() {

  const [likedJokes, setLikedJokes] = useState([])

  const addLikedJoke = (newJoke) => {
    setLikedJokes([newJoke, ...likedJokes])
  }

  const removeLikedJoke = (id) => {
    console.log(id);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/joke",
          element: <JokePage addLikedJoke={addLikedJoke} />
        },
        {
          path: "/favorite-jokes",
          element: <FavJokesPage likedJokes={likedJokes} removeLikedJoke={removeLikedJoke} />
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
