import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/layout';
import AboutPage from './pages/aboutPage/aboutPage';
import HomePage from './pages/homepage/homepage';
import FavJokesPage from './pages/favJokesPage/favJokesPage';

function App() {

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
          path: "/favorite-jokes",
          element: <FavJokesPage />
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
