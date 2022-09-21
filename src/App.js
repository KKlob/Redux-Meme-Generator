import React from 'react';
import FormFrame from './FormFrame';
import MemeFrame from './MemeFrame';
import { useSelector, useDispatch } from 'react-redux';
import './memeStyle.css';


function App() {

  const memes = useSelector(store => store.memes);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_MEME", payload: { id } });
  }

  return (
    <div className="App">
      <FormFrame />
      <div id="memePool">
        {memes.map((meme, id) => <MemeFrame data={meme} handleRemove={handleRemove} id={id} key={id} />)}
      </div>
    </div>
  );
}

export default App;
