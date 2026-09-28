import React from 'react';
import Card from './components/Card';
import { products } from './data/produk';
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'sans-serif' }}>
      <h1>Katalog Produk Sederhana</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((p) => (
          <Card key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default App;
