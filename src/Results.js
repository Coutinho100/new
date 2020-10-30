import React from 'react'
import Result from './Result'

function Results({result,openPopup}) {
    console.log(result)
    return (

        <>
        <div className="movies">
        {result.map(results=>(
            <Result key={results.imdbID} movies={results} openPopup={openPopup} />
        ))}
        </div>

        
        
        </>
    )

    }
export default Results;
