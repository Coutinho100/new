import React from 'react'

function Result({movies,openPopup}) {
    
    return (
     
        <div className="movie" onClick={()=>openPopup(movies.imdbID)}>
            <img src={movies.Poster} alt="Poster"/>
    <h3>{movies.Title}</h3>
        </div>
        
            
        
    )
}

export default Result
