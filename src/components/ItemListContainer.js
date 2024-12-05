import React from 'react';
import ItemCount from './ItemCount';

function ItemListContainer() {
  const stock = 5;  // Exemplo de estoque
  const initial = 1; // Quantidade inicial

  // Função de callback para adicionar ao carrinho
  const handleAdd = (count) => {
    console.log(`Adicionado ${count} item(s) ao carrinho`);
  };

  return (
    <div>
      <h1>Item List Container</h1>
      <ItemCount stock={stock} initial={initial} onAdd={handleAdd} />
    </div>
  );
}

export default ItemListContainer;
