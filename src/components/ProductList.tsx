import React, { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchProducts, searchProducts } from '../services/productApi';
import { Product } from '../types/Product';
import debounce from 'lodash.debounce';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [skip, setSkip] = useState(0);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false); 

  const LIMIT = 20;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearchDebounced = useCallback(
    debounce(async (searchQuery: string) => {
      setIsLoading(true);
      const searchResults = await searchProducts(searchQuery);
      setProducts(searchResults);
      setSkip(0);  
      setHasMore(false);  
      setIsLoading(false);
    }, 500), []
  );


  useEffect(() => {
    if (query === '') {
      loadMoreProducts();  
    } else {
      handleSearchDebounced(query);  
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, handleSearchDebounced]);

  const loadMoreProducts = async () => {
    if (isLoading) return; 
    setIsLoading(true);
    const newProducts = await fetchProducts(skip, LIMIT);
    setProducts((prev) => [...prev, ...newProducts]);
    setSkip(skip + LIMIT);
    if (newProducts.length < LIMIT) setHasMore(false);  
    setIsLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: '40%', padding: '10px', marginBottom: '10px', marginLeft: '10px' }}
      />
      {isLoading && <h4>Loading...</h4>} 
      <InfiniteScroll
        dataLength={products.length}
        next={loadMoreProducts}
        hasMore={hasMore}
        loader={!isLoading &&<h4>Loading...</h4>}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
          {products.map((product, index) => (
            <div key={index} style={{ border: '1px solid #ddd', padding: '5px', width: '160px' }}>
            <LazyLoadImage
                src={product.thumbnail} 
                alt={product.title} 
                effect="blur" 
                style={{ width: '100%' }}
              />
              <h3 style={{ fontSize: '16px' }}>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ProductList;
