// Item.js
import React from 'react';

function Item({ item }) {
  return (
    <div className="item">
      <img src={item.pictureUrl} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p><strong>Preço: R${item.price}</strong></p>
    </div>
  );
}

export default Item;
