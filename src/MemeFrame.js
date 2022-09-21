import React from 'react';

function MemeFrame({ data, handleRemove, id }) {

    function handleHoverOn(evt) {
        evt.target.classList.add("imgFade");
        evt.target.parentElement.classList.add("imgFade");
    }

    function handleHoverOff(evt) {
        evt.target.classList.remove("imgFade");
        evt.target.parentElement.classList.remove("imgFade");
    }

    function handleClick() {
        handleRemove(id);
    }

    return (
        <div className="memeFrame" style={{ backgroundImage: `url(${data.image})` }}>
            <div className="topOfFrame textDiv">{data.toptext}</div>
            <div className="botOfFrame textDiv">{data.bottext}</div>
            <div className="hover" onClick={handleClick} onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>X</div>
        </div>
    )
}

export default MemeFrame;