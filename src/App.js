import React from 'react';
import Form from './Form';

function App() {
  const memes = useSelector(store => store.memeArray);

  return (
    <div className="App">
      <div id="form_section">
        <Form />
      </div>
      <div id="meme_display">
        {memes.map(item => (
          <div style={{ backgroundImage: item.image }}>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
