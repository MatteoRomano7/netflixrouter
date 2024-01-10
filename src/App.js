import "./App.css"
import "./styles/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./styles/Components/HomePage"
import MovieDetails from "./styles/Components/MovieDetails"
import TVShows from "./styles/Components/TVShows"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tv-shows" element={<TVShows />} />
      <Route path="/details/:movieID" element={<MovieDetails />} />
    </Routes>
  </BrowserRouter>
)

export default App
