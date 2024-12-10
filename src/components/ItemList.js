// ItemList.js
import React from 'react';
import Item from './Item';
// ItemListContainer.js
import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

// Função mock que retorna uma promessa resolvida após 2 segundos
const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Produto 1', description: 'Descrição do produto 1', price: 99.99, pictureUrl: 'https://via.placeholder.com/150' },
        { id: 2, title: 'Produto 2', description: 'Descrição do produto 2', price: 199.99, pictureUrl: 'https://via.placeholder.com/150' },
        { id: 3, title: 'Produto 3', description: 'Descrição do produto 3', price: 299.99, pictureUrl: 'https://via.placeholder.com/150' },
      ]);
    }, 2000); // Simula 2 segundos de atraso
  });
};

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Chama o fetchItems e define os itens quando a promessa for resolvida
    fetchItems().then((data) => {
      setItems(data);
      setLoading(false); // Quando os dados forem carregados, setamos o loading como false
    });
  }, []);

  return (
    <div className="item-list-container">
      {loading ? (
        <p>Carregando produtos...</p>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
}

export default ItemListContainer;


function ItemList({ items }) {
  return (
    <div className="item-list">
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
