import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Form() {

    const dispatch = useDispatch();

    return (
        <div>
            <form>
                <label htmlFor="image">Image URL:</label>
                <input id="image" name="image" type="text" value={form.image} onChange={handleChange} />
                <label htmlFor="toptext">Top Text:</label>
                <input id="toptext" name="toptext" type="text" value={form.toptext} onChange={handleChange} />
                <label htmlFor="bottext">Bottom Text:</label>
                <input id="bottext" name="bottext" type="text" value={form.bottext} onChange={handleChange} />
                <button onClick={handleSubmit}>Generate Meme</button>
            </form>
        </div>
    )
}

export default Form;