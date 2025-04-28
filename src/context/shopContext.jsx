import { createContext, useState } from 'react';
import img1 from '../assets/img1.avif';
import img2 from '../assets/img2.avif';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.avif';
import img5 from '../assets/img5.avif';
import img6 from '../assets/img6.avif';
import img7 from '../assets/img7.avif';
import img8 from '../assets/img8.avif';
import img9 from '../assets/img9.avif';
import img10 from '../assets/img10.avif';
import img11 from '../assets/img11.avif';
import img12 from '../assets/img12.avif';
import img13 from '../assets/img13.avif';
import img14 from '../assets/img14.avif';
import img15 from '../assets/img15.avif';
import img16 from '../assets/img16.avif';
import img17 from '../assets/img17.avif';
import img18 from '../assets/img18.avif';
import img19 from '../assets/img19.avif';
import img20 from '../assets/img20.avif';
import img21 from '../assets/img21.avif';
import img22 from '../assets/img22.avif';
import img23 from '../assets/img23.avif';
import img24 from '../assets/img24.avif';
import img25 from '../assets/img25.avif';
import img26 from '../assets/img26.avif';
import img27 from '../assets/img27.avif';
import img28 from '../assets/img28.avif';
import img29 from '../assets/img29.avif';
import img30 from '../assets/img30.avif';
import img31 from '../assets/img31.avif';
import img32 from '../assets/img32.avif';
import img33 from '../assets/img33.avif';
import img34 from '../assets/img34.avif';
import img35 from '../assets/img35.avif';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency='$'
  const delivery_fee=10
  const [search,setSearch]=useState('')
  const [showSearch,setShowSearch]=useState(false)


  const [products] = useState([
    {
        id: 1,
        name: "Men Slim Fit Bomber Jacket",
        description:"Black reversible polyster-blend, slim fit,zip-front bomber jacket",
        price: 1490,
        image: [img1],
        category:"Men",
        subCategory:"Winterwear",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
    },
    {
        id: 2,
        name: "Women Striped Fit & Flare Dress",
        description:"Ruffle detailed fit and flare cotton, feminine blue sleeveless dress",
        price: 670,
        image: [img2],
        category:"Women",
        subCategory:"Dresses",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
    },
    {
        id: 3,
        name: "Polka-Dot Print Fit and Flare Dress",
        description:"Pastel pink polka-dot printed fit and flare dress for girls",
        price: 589,
        image: [img3],
        category:"Kids",
        subCategory:"Kids",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
    },
    {
        id: 4,
        name: "Men Slim Fit Cotton Crew-Neck T-Shirt",
        description:"Men graphic printed crew neck slim fit clasic short sleeve cotton cotton tshirt",
        price: 859,
        image: [img4],
        category:"Men",
        subCategory:"Tshirts",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
    },
    {
        id: 5,
        name: "Women Embellished kurta set",
        description:"A very pretty pink polyster, festive-wear embellished kurta with sharara pants and dupatta ",
        price: 1986,
        image: [img5],
        category:"Women",
        subCategory:"Kurta Sets",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
        
    },
    {
        id: 6,
        name: "Men Slim Fit Cargos",
        description:"Men slim fit cargos machine wash with Insert pockets, back slip pockets, 2 cargo pockets",
        price: 899,
        image: [img6],
        category:"Men",
        subCategory:"Bottomwear",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
        
      },
      {
        id: 7,
        name: "Women crew-neck tshirt",
        description:"Women graphic printed beige crew neck cotton tshirt",
        price: 499,
        image: [img7],
        category:"Women",
        subCategory:"Tshirts",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
      {
        id: 8,
        name: "Empire Embroidered Saree",
        description:"Gold-toned saree exquisitely crafted intricate embroidery and rich lace border with glass bugles and cut tubes",
        price: 9999,
        image: [img8],
        category:"Women",
        subCategory:"Sarees",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
      {
        id: 9,
        name: "Men Loose Fit Cargo Trousers",
        description:"Beige loose fit, cotton blend cargo trousers for men",
        price: 872,
        image: [img9],
        category:"Men",
        subCategory:"Bottomwear",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
      {
        id: 10,
        name: "Women Striped Regular Fit Shirt",
        description:"Blue printed striped regular fit cotton shirt for women",
        price: 799,
        image: [img10],
        category:"Women",
        subCategory:"Shirts",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
      {
        id: 11,
        name: "Women Embroidered Fit and Flare Kurta",
        description:"Beige printed embroidered fit and flare kurta for women",
        price: 1799,
        image: [img11],
        category:"Women",
        subCategory:"Kurtas",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
      {
        id: 12,
        name: "Infants Western Wear Sets",
        description:"An off-white cute co-ord set for baby girls",
        price: 899,
        image: [img12],
        category:"Infants",
        subCategory:"Sets",
        sizes:["0-6M","6-12M","1-2Y","2-3Y","3-4Y"],
        bestseller:true,
      },
      {
        id: 13,
        name: "Women Printed Kurta",
        description:"A Pastel printed kurta for women",
        price: 699,
        image: [img13],
        category:"Women",
        subCategory:"Kurtas",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
      {
        id: 14,
        name: "Men Checked Slim Fit Shirt with Spread Collar",
        description:"Checked Slim Fit brown Shirt with Spread Collar",
        price: 799,
        image: [img14],
        category:"Men",
        subCategory:"Shirts",
        sizes:["0-6M","6-12M","1-2Y","2-3Y","3-4Y"],
        bestseller:true,
      },
      {
        id: 15,
        name: "Men Blue Shirt",
        description:"Blue button down striped regular fit cotton shirt for men",
        price: 1499,
        image: [img15],
        category:"Men",
        subCategory:"Shirts",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
      {
        id: 16,
        name: "Infants Striped Regular Fit Shirt",
        description:"Blue printed striped regular fit cotton shirts with shorts for boys",
        price: 859,
        image: [img16],
        category:"Infants",
        subCategory:"Sets",
        sizes:["0-6M","6-12M","1-2Y","2-3Y","3-4Y"],
        bestseller:true,
      },
      {
        id: 17,
        name: "Girls Kurta Suit Set",
        description:"Orange and blue halter neck sleeveless kurta suit set for girls",
        price: 1399,
        image: [img17],
        category:"Kids",
        subCategory:"Kurts Sets",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
      {
        id: 18,
        name: "Infants Co-ord Set",
        description:"A begige co-ord set for infants",
        price: 799,
        image: [img18],
        category:"Infants",
        subCategory:"Sets",
        sizes:["0-6M","6-12M","1-2Y","2-3Y","3-4Y"],
        bestseller:true,
      },
      {
        id: 19,
        name: "Women Mini Bodycon Dress",
        description:"Shein Party Mini Length Detached Sleeves Strapless Bodycon Dress",
        price: 1799,
        image: [img19],
        category:"Women",
        subCategory:"Dresses",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
      {
        id: 20,
        name: "Roscoe Regular Fit Shirt",
        description:"Pink cotton blen casual shirt for men",
        price: 1199,
        image: [img20],
        category:"Men",
        subCategory:"Shirts",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
      {
        id: 21,
        name: "Checked A-line Dress with Headband and Bloomers",
        description:"Checked A-line Dress with Headband and Bloomers for girls",
        price: 799,
        image: [img21],
        category:"Infants",
        subCategory:"Sets",
        sizes:["0-6M","6-12M","1-2Y","2-3Y","3-4Y"],
        bestseller:true,
      },
      {
        id: 22,
        name: "Women Embellished Flared Lehenga Choli Set",
        description:"Embellished Flared lehenga choli set with dupatta for women",
        price: 9129,
        image: [img22],
        category:"Women",
        subCategory:"Kurts Sets",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
      {
        id: 23,
        name: "Flat-Front Baggy Fit Cargo Pants",
        description:"Flat-Front Baggy Fit Relaxed Blue Cargo Pants for men",
        price: 1799,
        image: [img23],
        category:"Men",
        subCategory:"Bottomwear",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
      {
        id: 24,
        name: "Women Typographic Print Regular Fit Crew-Neck T-Shirt",
        description:"Women Typographic Print Regular Fit Crew-Neck T-Shirt",
        price: 499,
        image: [img24],
        category:"Women",
        subCategory:"Tshirts",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
      {
        id: 25,
        name: "Men Graphic Print Regular Fit Crew-Neck T-Shirt",
        description:"Men Graphic Print Regular Fit Crew-Neck T-Shirt",
        price: 539,
        image: [img25],
        category:"Men",
        subCategory:"Tshirts",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
      {
        id: 26,
        name: "Floral Print Strappy Top with Shorts",
        description:"Floral Print Strappy Top with Shorts",
        price: 799,
        image: [img26],
        category:"Kids",
        subCategory:"Sets",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
      {
        id: 27,
        name: "T-shirt with Briefs & Cap",
        description:"Green tshirt with briefs and cap for boys",
        price: 849,
        image: [img27],
        category:"Infants",
        subCategory:"Sets",
        sizes:["0-6M","6-12M","1-2Y","2-3Y","3-4Y"],
        bestseller:true,
      },
      {
        id: 28,
        name: "Women Floral Print Flared Kurta & Pants Set",
        description:"Women Floral Print Flared Kurta & Pants Set",
        price: 1399,
        image: [img28],
        category:"Women",
        subCategory:"Sets",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
      {
        id: 29,
        name: "Grey Hoodie with Shorts",
        description:"Warm cozy Hoodie with shorts for infants ",
        price: 799,
        image: [img29],
        category:"Infants",
        subCategory:"Sets",
        sizes:["0-6M","6-12M","1-2Y","2-3Y","3-4Y"],
        bestseller:true,
      },
      {
        id: 30,
        name: "Embellished Lehenga Choli Set with Dupatta",
        description:"Embellished Lehenga Choli Set with Dupatta",
        price: 9799,
        image: [img30],
        category:"Women",
        subCategory:"Sets",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
      {
        id: 31,
        name: "Serene Ribbed Elegant Regular Fit Shirt",
        description:"Ribbed Elegant Brown Regular Fit Shirt for men",
        price: 1199,
        image: [img31],
        category:"Men",
        subCategory:"Shirts",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
      {
        id: 32,
        name: "Solid Top",
        description:"Solid Black Top for Women",
        price: 799,
        image: [img32],
        category:"Women",
        subCategory:"Tops",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
      {
        id: 33,
        name: "Women A-line Dress",
        description:"Women A-line Dress",
        price: 1499,
        image: [img33],
        category:"Women",
        subCategory:"Dresses",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
      {
        id: 34,
        name: "Women Rivi Ruched Bodycon Dress",
        description:"Women Rivi Ruched Bodycon Dress",
        price: 1699,
        image: [img34],
        category:"Women",
        subCategory:"Dresses",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
      {
        id: 35,
        name: "Men Striped Slim Fit Shirt",
        description:"Men Striped Slim Fit Shirt",
        price: 699,
        image: [img35],
        category:"Men",
        subCategory:"Shirts",
        sizes:["XS","S","M","L","XL"],
        bestseller:true,
      },
  ]);



  const value={
    products,currency,delivery_fee,
    search,setSearch,showSearch,setShowSearch
  }   

  

  return (
    <ShopContext.Provider value={{
      products,
      search,
      setSearch,
      showSearch,
      setShowSearch,
      currency,
      delivery_fee
    }}>
      {children}
    </ShopContext.Provider>
  );
  
};

export default ShopContextProvider;
