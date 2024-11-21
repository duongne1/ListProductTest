import React from 'react';
import ProductList from './components/ProductList';

const App: React.FC = () => {
  return (
    <div style={{ padding: '10px', }}>
      <h1>List Product</h1>
      <ProductList />
    </div>
  );
};

export default App;
