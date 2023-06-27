import './App.css';
import React, { useState } from 'react';
import { act } from 'react-dom/test-utils';

const App = () => {
  const [heading, setHeading] = useState('Magnificent Monkeys');

  const clickHandler = () => {
    act(() => {
    setHeading('Radical Rhinos');
    });
  };

  return (
    <>
      <button type='button' onClick={clickHandler}>
        Click Me
      </button>
      <h1>{heading}</h1>
    </>
  )
};

export default App;
