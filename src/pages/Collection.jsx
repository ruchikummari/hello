import React, {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import dropdown from "../assets/dropdown.png"
import Title from "../components/Title.jsx"
import ProductItems from '../components/ProductItems.jsx';

function Collection() {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter,setShowFilter]=useState(false)
  const [filterProducts,setFilterProducts]=useState([])
  const [category,setCategory]=useState([])
  const [subCategory,setSubCategory]=useState([])
  const [sortType,setSortType]=useState('relevance')

  const toggleCategory=(event)=>{
    if(category.includes(event.target.value)){
      setCategory(previous=>previous.filter(item=>item!==event.target.value))
    }
    else{
      setCategory(previous=>[...previous,event.target.value])
    }
  }
  const toggleSubCategory=(event)=>{
    if(category.includes(event.target.value)){
      setSubCategory(previous=>previous.filter(item=>item!==event.target.value))
    }
    else{
      setSubCategory(previous=>[...previous,event.target.value])
    }
  }

  const applyFilter =()=>{
    let productsCopy=products.slice();

    if(showSearch && search){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length>0){
      productsCopy=productsCopy.filter(item=>category.includes(item.category))
    }
    if(subCategory.length>0){
      productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory))
    }
    setFilterProducts(productsCopy)
  }

  const sortProduct=()=>{
    let fpCopy=filterProducts.slice()
    switch (sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)))
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)))
        break;
      default:
        applyFilter();
        break;
    }
  }


useEffect(()=>{
  setFilterProducts(products)
},[])

useEffect(()=>{
  applyFilter()
},[category,subCategory,search,showSearch])

useEffect(()=>{
  sortProduct()
},[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-20'>
      <div className='min-w-60'>
        <p onClick={()=>{setShowFilter(!showFilter)}} className='pt-9 my-2 text-xl flex items-center cursor-pointer gap-2'>Refine by 
        <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90': ''}`} src={dropdown}/></p>

        

        <div className={`border rounded border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='gap-2 flex'>
              <input className='w-3' type='checkbox' value={'Men'} onChange={toggleCategory}/>Men
            </p>
            <p className='gap-2 flex'>
              <input className='w-3' type='checkbox' value={'Women'} onChange={toggleCategory}/>Women
            </p>
            <p className='gap-2 flex'>
              <input className='w-3' type='checkbox' value={'Kids'} onChange={toggleCategory}/>Kids
            </p>
            <p className='gap-2 flex'>
              <input className='w-3' type='checkbox' value={'Home'} onChange={toggleCategory}/>Home
            </p>
            <p className='gap-2 flex'>
              <input className='w-3' type='checkbox' value={'Infants'} onChange={toggleCategory}/>Infants
            </p>
          </div>
        </div>



        <div className={`border rounded border-gray-300 pl-5 py-3 my-5 ${showFilter ? '':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='gap-2 flex'>
              <input className='w-3' type='checkbox' value={'Bottomwear'} onChange={toggleSubCategory}/>Bottomwear
            </p>
            <p className='gap-2 flex'>
              <input className='w-3' type='checkbox' value={'Dresses'} onChange={toggleSubCategory}/>Dresses
            </p>
            <p className='gap-2 flex'>
              <input className='w-3' type='checkbox' value={'Kurtas'} onChange={toggleSubCategory}/>Kurtas
            </p>
            <p className='gap-2 flex'>
              <input className='w-3' type='checkbox' value={'Kurta Sets'} onChange={toggleSubCategory}/>Kurta Sets
            </p>
            <p className='gap-2 flex'>
              <input className='w-3' type='checkbox' value={'Tops'} onChange={toggleSubCategory}/>Tops
            </p>
            <p className='gap-2 flex'>
              <input className='w-3' type='checkbox' value={'Tshirts'} onChange={toggleSubCategory}/>Tshirts
            </p>
            <p className='gap-2 flex'>
              <input className='w-3' type='checkbox' value={'Sarees'} onChange={toggleSubCategory}/>Sarees
            </p>
            <p className='gap-2 flex'>
              <input className='w-3' type='checkbox' value={'Winterwear'} onChange={toggleSubCategory}/>Winterwear
            </p>
            <p className='gap-2 flex'>
              <input className='w-3' type='checkbox' value={'Shirts'} onChange={toggleSubCategory}/>Shirts
            </p>
            <p className='gap-2 flex'>
              <input className='w-3' type='checkbox' value={'Sets'} onChange={toggleSubCategory}/>Sets
            </p>
          </div>
        </div>
      </div>



      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4 pt-10'>
          <Title  text1={'ALL'} text2={' COLLECTIONS'}/>

          <select onChange={(e) => setSortType(e.target.value)} className="rounded border-2 border-gray-300 text-sm px-2">
            <option value="relevance">Sort by: Relevance</option>
            <option value="low-high">Sort by: Price (Low to High)</option>
            <option value="high-low">Sort by: Price (High to Low)</option>
          </select>

        </div>


        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          filterProducts.map((item,index)=>(
            <ProductItems key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Collection
