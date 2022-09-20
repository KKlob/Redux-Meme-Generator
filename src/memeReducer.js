const INI_STATE = {
    form: {
        image: "",
        toptext: "",
        bottext: ""
    },
    memes: []
}

function addMemePure(array, item) {
    return [...array, item];
}

function memeReducer(state = INI_STATE, action) {
    switch (action.type) {
        case "UPDATE_FORM":
            return { ...state, form: { ...state.form, [action.payload[0]]: action.payload[1] } };
        case "ADD_MEME":
            let form = state.form;
            return { ...state, memes: addMemePure(state.memes, form), form: { image: "", toptext: "", bottext: "" } }
        default:
            return state;
    }
}

export default memeReducer;