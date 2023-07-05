import React, { useState } from 'react';
import './statusP.css';

const products = [
  { name: 'Produto A', quantity: 5 },
  { name: 'Produto B', quantity: 0 },
  { name: 'Produto C', quantity: 15 },
  { name: 'Produto D', quantity: 10 },
  { name: 'Produto E', quantity: 2 },
  { name: 'Produto F', quantity: 8 },
  { name: 'Produto G', quantity: 0 },
  { name: 'Produto H', quantity: 20 },
  { name: 'Produto I', quantity: 3 },
  { name: 'Produto J', quantity: 12 },
  { name: 'Produto K', quantity: 7 },
  { name: 'Produto L', quantity: 0 },
  { name: 'Produto M', quantity: 18 },
  { name: 'Produto N', quantity: 6 },
  { name: 'Produto O', quantity: 4 },
  { name: 'Produto P', quantity: 0 },
  { name: 'Produto Q', quantity: 9 },
  { name: 'Produto R', quantity: 13 },
  { name: 'Produto S', quantity: 1 },
  { name: 'Produto T', quantity: 0 },
  { name: 'Produto U', quantity: 14 },
  { name: 'Produto V', quantity: 11 },
  { name: 'Produto W', quantity: 0 },
  { name: 'Produto X', quantity: 16 },
  { name: 'Produto Y', quantity: 0 },
  { name: 'Produto Z', quantity: 19 },
  { name: 'Produto AA', quantity: 17 },
  { name: 'Produto AB', quantity: 0 },
  { name: 'Produto AC', quantity: 21 },
  { name: 'Produto AD', quantity: 23 },
  { name: 'Produto AE', quantity: 0 },
  { name: 'Produto AF', quantity: 24 },
  { name: 'Produto AG', quantity: 22 }
];

const ProductList = () => {
  const [fontSize, setFontSize] = useState(16);

  const sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize - 2);
  };

  return (
    <div className='containeresp' style={{ fontSize: `${fontSize}px` }}>
      <div className="button-container">
        <button onClick={increaseFontSize}>Aumentar Fonte</button>
        <button onClick={decreaseFontSize}>Diminuir Fonte</button>
      </div>
      <div className='containerS'>
        {sortedProducts.map((product) => (
          <div
            key={product.name}
            className={
              product.quantity > 10
                ? 'blue'
                : product.quantity > 0
                ? 'orange'
                : 'red'
            }
          >
            <h3>{product.name}</h3>
            <p>Quantidade: {product.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
