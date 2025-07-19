import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';
import { toast } from 'sonner';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productsData, setProductsData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    // Find product by id (ShopContext uses id, not _id)
    const foundProduct = products.find((item) => String(item.id) === String(productId));
    if (foundProduct) {
      setProductsData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  }, [productId, products]);

  if (!productsData) {
    return <div className="opacity-0">Loading...</div>;
  }

  return (
    <div className="px-20 border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ---------------------- Products Data ----------------------*/}
      <div className="flex gap-12 sm:gap-12 flex-row sm:flex-row">
        {/* ---------------------- products images ---------------------- */}
        <div className="flex-1 flex gap-3">
  {/* ---------------------- Thumbnails ----------------------*/}
  <div className="hidden sm:flex flex-col gap-3 w-[18%] overflow-y-auto">
    {productsData.image.map((img, index) => (
      <img
        src={img}
        key={index}
        alt="thumbnail"
        className="cursor-pointer object-cover w-full"
        onClick={() => setImage(img)}
      />
    ))}
  </div>

  {/* For small screens - horizontal thumbnails */}
  <div className="sm:hidden flex gap-2 overflow-x-auto mb-4">
    {productsData.image.map((img, index) => (
      <img
        src={img}
        key={index}
        alt="thumbnail"
        className="w-20 h-20 object-cover flex-shrink-0 cursor-pointer"
        onClick={() => setImage(img)}
      />
    ))}
  </div>

  {/* ---------------------- Main Image ----------------------*/}
  <div className="flex-1 flex justify-center items-center">
    <img
      src={image}
      alt="main"
      className="w-full max-w-[500px] h-auto object-cover"
    />
  </div>
</div>


        {/* ---------------------- products details ---------------------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productsData.name}</h1>

          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productsData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5 ">
            {productsData.description}
          </p>

          <div className="flex flex-col gap-4 my-8">
            <p className="">Select Size</p>
            <div className="flex gap-2">
              {productsData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSize(item);
                  }}
                  className={`w-8 h-8 border bg-gray-100 flex items-center justify-center cursor-pointer ${item === size ? 'border-orange-500' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              if (!size) {
                toast.error("Please select a size before adding to cart!");
                return;
              }
              addToCart(productsData.id, size);
              toast.success("Item added to cart!");
            }}
            className="bg-black text-white py-3 px-8 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5" />

          <div className="flex flex-col gap-1 mt-5 text-sm text-gray-500">
            <p>100% Original product </p>
            <p>Free delivery on order above $49</p>
            <p> Easy return and exchange policy within 7 days </p>
          </div>
        </div>
      </div>

      {/* ---------------------- Products Description and review section ----------------------*/}
      <div className="mt-10">
        <div className="flex">
          <b className="px-5 py-3 text-sm border">Description</b>
          <p className="px-5 py-3 text-sm border">Reviews (122)</p>
        </div>

        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>

      {/* ---------------------- Display Related Products ----------------------*/}
      <RelatedProducts
        category={productsData.category}
        subCategory={productsData.subCategory}
      />
    </div>
  );
};

export default Product;