import React, { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
  // Estado para controlar a quantidade
  const [count, setCount] = useState(initial);

  // Função para aumentar a quantidade
  const increaseCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  // Função para diminuir a quantidade
  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Função chamada quando o usuário clicar em "Adicionar"
  const handleAdd = () => {
    if (count > 0 && count <= stock) {
      onAdd(count);
    }
  };

  return (
    <div>
      <div>
        {/* Botão de diminuir */}
        <button onClick={decreaseCount} disabled={count <= 1}>
          -
        </button>

        {/* Exibição do contador */}
        <span>{count}</span>

        {/* Botão de aumentar */}
        <button onClick={increaseCount} disabled={count >= stock}>
          +
        </button>
      </div>

      {/* Botão para adicionar os itens ao carrinho */}
      <div>
        <button onClick={handleAdd} disabled={count <= 0 || count > stock}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
