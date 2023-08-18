import React from 'react';

function Card({ onClick }) {
  return (
    <div className="card" onClick={onClick}>
      Account
    </div>
  );
}

export default Card;
