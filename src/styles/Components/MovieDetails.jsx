import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"

const MovieDetails = () => {
  const [details, setDetails] = useState(null)
  const [comments, setComments] = useState([])

  const params = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        let resp = await fetch(
          "http://www.omdbapi.com/?i=tt3896198&apikey=d163d1bb" + params.movieID
        )
        if (resp.ok) {
          let data = await resp.json()
          console.log(data)
          setDetails(data)
        } else {
          console.log("errore nel caricamento ")
        }
      } catch (error) {
        console.log(error)
      }
    }
    const fetchComments = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            params.movieID,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NmY1YjJjNmEwZDAwMTg0OTVlNmIiLCJpYXQiOjE3MDQ4OTIyNjEsImV4cCI6MTcwNjEwMTg2MX0.Z7ZYMJwXQbYYF6XTjf6f2DVgPFHBn60dw12GMghVVCE",
            },
          }
        )
        if (response.ok) {
          let data = await response.json()
          setComments(data)
        } else {
          console.log("Errore nel recupero dei commenti")
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchDetails()
    fetchComments()
  }, [params.movieID])

  return (
    <div className="text-center text-white">
      {details && (
        <>
          <h2>{details.Title}</h2>
          <img src={details.Poster} alt="movie poster" />
          <ul style={{ listStyleType: "none" }}>
            {comments.map((c) => (
              <li className="my-3" key={c._id}>
                {c.comment}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default MovieDetails
