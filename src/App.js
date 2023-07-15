import React, { useState } from 'react';
import MyButtonGroup from './components/MyButtonGroup';
import "./styles/App.css"
import MyInput from './UI/Inputs/MyInput';

function App() {
  const [input, setInput] = useState('');

  return (
    <div className='App'>
      <MyInput input={input} />
      <MyButtonGroup setInput={setInput} input={input} />
    </div>
  );
}

export default App;
