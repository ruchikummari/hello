import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItems from './ProductItems';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // Get current product ID from URL
    const currentProductId = parseInt(window.location.pathname.split('/').pop());
    
    // Filter products that match category or subcategory and exclude current product
    const related = products.filter(
      (product) =>
        (product.category === category || product.subCategory === subCategory) &&
        product.id !== currentProductId
    );
    
    // Take first 5 related products
    setRelatedProducts(related.slice(0, 5));
  }, [category, subCategory, products]);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={'RELATED'} text2={' PRODUCTS'} />
      </div>
      <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {relatedProducts.map((item) => (
          <ProductItems
            key={item.id}
            id={item.id}
            image={item.image[0]} // Since image is an array in ShopContext
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts; 