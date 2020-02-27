import React, { useState, useEffect } from 'react';

const NumberButton = props => {

  const colours = {
    available: '',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
  };

  const [colour, setColour] = useState(null);

  useEffect(
    () => setColour(colours[props.status]),
    [props.status]
  );

  return (
    <button
      style={{ background: colour }}
      className="btn btn-outline-info btn-md play-btn m-1"
      onClick={() => props.onNumberClick(props.number, props.status)}
    >
      {props.number}
    </button>
  );
};

export default NumberButton;
