import React from 'react';

function Button({ id, funk, title }) {
  return (
    <button
      type="button"
      className="Btn"
      id={id}
      onClick={funk}
      >
      {title}
    </button>
  );
}

export default Button
