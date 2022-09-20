import React from 'react';
import memeReducer from "./memeReducer";
import { useDispatch } from 'react-redux';

function Form() {
    const dispatch = useDispatch();

    function handleSubmit() {
        const image = document.querySelector("#image").
            dispatch({ type: "CREATE", payload: {} })
    }

    return (
        <div>
            <form>
                <label htmlFor="image">Image URL:</label>
                <input id="image" name="image" />
                <label htmlFor="toptext">Top Text:</label>
                <input id="toptext" name="toptext" />
                <label htmlFor="bottext">Bottom Text:</label>
                <input id="bottext" name="bottext" />
                <button onClick={handleSubmit}>Generate Meme</button>
            </form>
        </div>
    )
}