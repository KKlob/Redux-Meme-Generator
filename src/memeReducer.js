const INI_STATE = {
    memes: []
};

function removeMemePure(array, id) {
    const newArray = array.map(item => item);
    newArray.splice(id, 1);
    return newArray;
}

function memeReducer(state = INI_STATE, action) {
    switch (action.type) {
        case "ADD_MEME":
            return { ...state, memes: [...state.memes, action.payload] };
        case "REMOVE_MEME":
            return { ...state, memes: removeMemePure(state.memes, action.payload.id) }
        default:
            return state;
    }
}

export default memeReducer;