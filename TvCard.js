import React, { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa"
import './moviecard.css'
export default function TvCard({ tv }) {

    const { id, poster_path, name, first_air_date, vote_count, vote_average } = tv;
    const [isFavorite, setIsFavorite] = useState(
        JSON.parse(localStorage.getItem('favoriteSeries'))?.some(([_, movieId]) => movieId === id) || false
    )
    const toggleFavorite = () => {
        setIsFavorite((prev) => !prev)
    }
    useEffect(() => {
        const favSeries = JSON.parse(localStorage.getItem("favoriteSeries")) || []
        if (isFavorite) {
            localStorage.setItem('favoriteSeries', JSON.stringify([...favSeries, [name, id]]))
        } else {
            localStorage.setItem('favoriteSeries',
                JSON.stringify(favSeries.filter(([_, tvId]) => tvId !== id)))
        }
    }, [isFavorite, name, id])
    return (
        <div>
            <li className='card'  style={{position:"relative"}}>
                <div style={{width:"100%",height:"100%",background:"blue",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <img style={{width:"100%",height:"auto"}} className='poster' height="150" width="150" src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt='title' />
                </div>
                <div className='bottom-glass-effect'>
                    <h1 className='title'  style={{marginTop:"0px"}}>{name}</h1>
                    <section className='fav-heart' style={{display:"flex",padding:"10px",justifyContent:"space-between"}}>
                        <div className='heart-icon'>
                            <p>Rating: {vote_average}</p>
                            <p>Votes: {vote_count} </p>
                            <p>Release: {first_air_date}</p>
                        </div>
                        <div>
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