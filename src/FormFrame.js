import React, { useState } from 'react';
import Form from './Form';

function FormFrame() {

    const [form, setForm] = useState({
        image: "",
        toptext: "",
        bottext: ""
    })

    return (
        <div id="generateMeme">
            <Form data={{ form, setForm }} />
        </div>
    )
}

export default FormFrame;