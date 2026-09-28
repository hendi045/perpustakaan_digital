import React from 'react';

const Card = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', borderRadius: '8px', minWidth: '200px' }}>
      <h3>{product.nama}</h3>
      <p>Harga: Rp {product.harga.toLocaleString('id-ID')}</p>
      <p>Stok: {product.stok === 0 ? <span style={{ color: 'red' }}>Habis</span> : product.stok}</p>
    </div>
  );
};

export default Card;
