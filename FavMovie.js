import React, { useState } from 'react'
import MovieList from './MovieList'

export default function FavMovie() {
    const [fav, setFav] = useState([])
    const favoriteMovieIDs = JSON.parse(localStorage.getItem('favoriteMovies')) || []
    const fetchMovies = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=1`)
            const result = await response.json();
            return result.results
        } catch (error) {
            console.log(error)
            return []
        }
    }
    const renderFavoriteMovies = async () => {
        const mainMovieList = await fetchMovies();
        var l=[]
        // const favoriteMovies = mainMovieList.filter((movie) =>
        //     favoriteMovieIDs.some(([_, movieId]) => movieId === movie.id)
        // );
        mainMovieList.map(movie=>{
            favoriteMovieIDs.map(([_,id])=>{
                if(movie.id===id){
                    console.log(id)
                    l.push(movie)
                }
            })
        })
        // return favoriteMovies;
        return l

    }
    renderFavoriteMovies().then((response) => {
        setFav(response)
    })
    return (
        <div>
            <h1  style={{color:"white",width:"100vw",textAlign:"center"}}>Favorite Movies</h1>
            {favoriteMovieIDs.length > 0 ? (
                <MovieList movies={fav} />
            ) : <>
                <h1  style={{color:"white",width:"100vw",textAlign:"center"}}>No movies selected</h1>
            </>}
        </div>
    )
}