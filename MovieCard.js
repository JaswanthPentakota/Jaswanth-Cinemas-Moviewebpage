import React, { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa"
import './moviecard.css'
export default function MovieCard({ movie }) {

  const { id, poster_path, title, release_date, vote_count, vote_average } = movie;
  const [isFavorite, setIsFavorite] = useState(
    JSON.parse(localStorage.getItem('favoriteMovies'))?.some(([_, movieId]) => movieId === id) || false
  )
  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev)
  }
  useEffect(() => {
    const favMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || []
    if (isFavorite) {
      localStorage.setItem('favoriteMovies', JSON.stringify([...favMovies, [title, id]]))
    } else {
      localStorage.setItem('favoriteMovies',
        JSON.stringify(favMovies.filter(([_, movieId]) => movieId !== id)))
    }
  }, [isFavorite, title, id])
  return (
    <div>
      <li className='card' style={{position:"relative"}}>
        <div style={{width:"100%",height:"100%",background:"blue",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img style={{width:"100%",height:"auto"}} className='poster' height="150" width="150" src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt='title' />
        </div>
        <div className='bottom-glass-effect'>
          <h1 className='title' style={{marginTop:"0px"}}>{title}</h1>
          <section className='fav-heart' style={{display:"flex",padding:"10px",justifyContent:"space-between"}}>
            <div style={{gap:"0px"}}>
              <p>Rating: {vote_average}</p>
              <p>Votes: {vote_count} </p>
              <p>Release: {release_date}</p>
            </div>
            <div style={{marginRight:"30px"}}>
              {isFavorite ? (
                <FaHeart className='fav-icon' color='red' onClick={toggleFavorite} />
              ) : (
                <FaRegHeart className='fav-icon' onClick={toggleFavorite} />
              )}
            </div>
          </section>
          </div>
      </li>
    </div>
  )
}