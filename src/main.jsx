import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import App from './App.jsx'
import { FavJokeProvider } from './context/favJokeContext.jsx'

createRoot(document.getElementById('root')).render(
  <FavJokeProvider>
    <App />
  </FavJokeProvider>

)
