import React, { useEffect, useState } from 'react';
import GifList from "./GifList"
import GifSearch from "./GifSearch"

function GifListContainer(props) {
    const [query, setQuery] = useState("dolphin")
    const [gifs, setGifs] = useState([])

    const key = "7VymQRARtjF0lcKcKqw273CuWBiqM5Ad"
    // let baseUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}&rating=g`

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}&rating=g&limit=3`)
            .then(res => res.json())
            .then(({data}) => {
                const gifs = data.map((gif) => ({ url: gif.images.original.url }))
                setGifs(gifs)
            })
    }, [query])

    return (
        <div style={{ display: "flex"}}>
            <GifList gifs={gifs}/>
            <GifSearch onSubmitQuery={setQuery}/>
        </div>
    );
}

export default GifListContainer;