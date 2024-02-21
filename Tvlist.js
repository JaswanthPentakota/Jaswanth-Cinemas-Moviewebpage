import React, { useState } from 'react'
import TvCard from './TvCard'
import "./App.css"
export default function Tvlist({ series }) {
    const [sortOrder, setSortOrder] = useState('asc')
    const sortedMovies = [...series].sort((a, b) => {
        if (sortOrder === "asc") {
            return a.vote_count - b.vote_count
        } else {
            return b.vote_count - a.vote_count
        }
    })
    const handleSort = () => {
        setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
    }
    return (
        <div  style={{width:"100vw",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"space-between"}}>
            <div>
                <button className='sort-btn' onClick={handleSort}>
                    Sort by vote average ({sortOrder === "asc" ? "Ascending" : "Descending"})
                </button>

            </div>
            <ul className='movielist'>
                {sortedMovies.map((tv) =>
                    <TvCard key={tv.id} tv={tv} />)}
            </ul>

        </div>
    )
}