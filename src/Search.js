import React from 'react'

function Search({handleInput,value,search}) {
    return (
        <div>
            <input value={value} onKeyPress={(e)=>search(e)} onChange={(e)=>handleInput(e)} type="text" placeholder="Enter a Movie"/>
        </div>
    )
}

export default Search
