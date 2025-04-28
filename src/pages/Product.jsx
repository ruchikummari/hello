import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

function Product() {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchProductData = async () => {
      const foundProduct = products.find((item) => item.id == productId);
      if (foundProduct) {
        setProductData(foundProduct);
        setImage(foundProduct.image[0]);
      }
    };
    fetchProductData();
  }, [productId, products]);

  if (!productData) {
    return <div className="opacity-0">Loading...</div>;
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex flex-col sm:flex-row gap-10">

      
        <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto w-full sm:w-[100px]">
          {productData.image.map((img, index) => (
            <img
              src={img}
              key={index}
              alt="thumbnail"
              className="w-[80px] h-[100px] object-cover cursor-pointer border border-gray-300 hover:border-black"
              onClick={() => setImage(img)}
            />
          ))}
        </div>

     
        <div className="w-full sm:flex-1 flex justify-center items-center">
          <img
            src={image}
            alt="main"
            className="w-full max-w-[500px] h-auto object-cover"
          />
        </div>

      </div>
    </div>
  );
}

export default Product;
