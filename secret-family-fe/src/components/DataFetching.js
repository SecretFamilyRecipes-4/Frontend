import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataFetchingStyling from './DataFecthingStyling.js';


function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
        .then(res => {
            console.log(res.data)
            setPosts(res.data.base_layer)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <DataFetchingStyling>
            <ul>
                <li>
                    <h2>{posts.name}</h2>
                    <p>{posts.recipe}</p>
                </li>
            </ul>
        </DataFetchingStyling>
    )
}

export default DataFetching