import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const LatestCollection=()=>{

    const{products}=useContext(ShopContext);

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <title text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p></p>
      </div>
      
    </div>
  )
}

export default LatestCollection
