import React from 'react';
import { useDispatch } from 'react-redux';

function Form({ data }) {

    const dispatch = useDispatch();

    const form = data.form;
    const setForm = data.setForm;

    function handleChange(evt) {
        const { name, value } = evt.target;
        setForm(fData => ({
            ...fData,
            [name]: value
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        dispatch({ type: "ADD_MEME", payload: form });
        setForm({
            image: "",
            toptext: "",
            bottext: ""
        });
    }

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