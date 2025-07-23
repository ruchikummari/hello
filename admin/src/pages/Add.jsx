import React from 'react'
import upload_area from "../assets/admin_assets/upload_area.png"
import { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify';


const add = ({token}) => {

  const [img1,setImage1]=useState(false)
  const [img2,setImage2]=useState(false)
  const [img3,setImage3]=useState(false)
  const [img4,setImage4]=useState(false)

  const [name,setName]= useState("");
  const [description,setDescription]=useState("");
  const [price,setPrice]= useState("");
  const [category,setCategory]= useState("Men");
  const [subCategory,setSubCategory]= useState("Topwear");
  const [bestseller,setBestseller]= useState(false);
  const [sizes,setSizes]=useState([]);

  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    try {
      const formData = new FormData()
      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subCategory",subCategory)
      formData.append("bestseller",bestseller)
      formData.append("sizes",JSON.stringify(sizes))

      img1 && formData.append("image1",img1)
      img2 && formData.append("image2",img2)
      img3 && formData.append("image3",img3)
      img4 && formData.append("image4",img4)

      const response = await axios.post(backendUrl+"/api/product/add",formData,{headers:{token}})
      if(response.data.success){
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
      }else{
        toast.error(response.data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          <label htmlFor='img1'>
            <img className='w-20' src={!img1 ? upload_area : URL.createObjectURL(img1)}/>
            <input onChange={(e)=>setImage1(e.target.files[0])} type='file' id='img1' hidden/>
          </label>
          <label htmlFor='img2'>
            <img className='w-20' src={!img2 ? upload_area : URL.createObjectURL(img2)}/>
            <input onChange={(e)=>setImage2(e.target.files[0])} type='file' id='img2' hidden/>
          </label>
          <label htmlFor='img3'>
            <img className='w-20' src={!img3 ? upload_area : URL.createObjectURL(img3)}/>
            <input onChange={(e)=>setImage3(e.target.files[0])} type='file' id='img3' hidden/>
          </label>
          <label htmlFor='img4'>
            <img className='w-20' src={!img4 ? upload_area : URL.createObjectURL(img4)}/>
            <input onChange={(e)=>setImage4(e.target.files[0])} type='file' id='img4' hidden/>
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product name</p>
        <input onChange={(e)=>setName(e.target.value)} className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Type here' required/>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Write content here' required/>
      </div>

      <div className='flex flex-col sm:flex-row fap-2 w-full sm:gap-8'>

        <div>
          <p className='mb-2'>Product Category</p>
          <select onChange={(e)=>setCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Men ">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
            <option value="Home">Home</option>
            <option value="Infants">Infants</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Sub Category</p>
          <select onChange={(e)=>setSubCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Bottomwear ">Bottomwear</option>
            <option value="Topwear">Topwear</option>
            <option value="Ethnicwear">Ethnicwear</option>
            <option value="Dresses">Dresses</option>
            <option value="Sets">Sets</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Price</p>
          <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type='Number' placeholder='25'/>
        </div>

      </div>

      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-2'>
          <div onClick={()=>setSizes(prev=>prev.includes("XS") ? prev.filter(item=>item!=="XS"):[...prev,"XS"])}>
            <p className={`${sizes.includes("XS") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XS</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("S") ? prev.filter(item=>item!=="S"):[...prev,"S"])}>
            <p className={`${sizes.includes("S") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>S</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("M") ? prev.filter(item=>item!=="M"):[...prev,"M"])}>
            <p className={`${sizes.includes("M") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>M</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("L") ? prev.filter(item=>item!=="L"):[...prev,"L"])}>
            <p className={`${sizes.includes("L") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>L</p>
          </div>
          <div onClick={()=>setSizes(prev=>prev.includes("XL") ? prev.filter(item=>item!=="XL"):[...prev,"XL"])}>
            <p className={`${sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XL</p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={()=>setBestseller(prev=>!prev)} checked={bestseller} type='checkbox' id='bestseller'/>
        <label className='cursor-pointer' htmlFor='bestseller'>Add to bestseller</label>
      </div>

      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white rounded'>ADD</button>

    </form>
  )
}

export default add
