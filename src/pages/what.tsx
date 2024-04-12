import React from 'react';

const Greeting = () => {
  const sayHi = () => {
    alert('Hi!');
  };

  return (
    <div>
      <button onClick={sayHi}>Say Hi</button>
    </div>
  );
};

export default Greeting;
