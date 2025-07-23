import{v2 as cloudinary} from 'cloudinary';
import productModel from "../models/productModel.js"

//function for add product
const addProduct = async(req,res)=>{
    try {
        const {name,description,price,category,subCategory,sizes,bestseller}=req.body
        const img1 = req.files?.img1?.[0];
        const img2 = req.files?.img2?.[0];
        const img3 = req.files?.img3?.[0];
        const img4 = req.files?.img4?.[0];


        const images=[img1,img2,img3,img4].filter((item)=>item!==undefined)
        let imagesUrl = await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'})
                return result.secure_url
            })
        )
        const productData={
            name,
            description,
            category,
            price:Number(price),
            subCategory,
            bestseller:bestseller=="true"?true:false,
            sizes:JSON.parse(sizes),
            image:imagesUrl,
            date:Date.now()
        }

        console.log(productData)

const product = new productModel(productData)
await product.save()

return res.json({success:true,message:"Product added"})

    } catch (error) {
        return res.json({success:false,message:error.message})
    }
}

//function for list product
const listProducts = async(req,res)=>{
    try {
        const products = await productModel.find({});
        return res.json({success:true,products})
    } catch (error) {
        console.log(error)
        return res.json({success:false,message:error.message})
    }
    
}

//function for remove product
const removeProduct = async(req,res)=>{
    try {
        await productModel.findByIdAndDelete(req.body.id)
        return res.json({success:true,message:"Product removed"})
    } catch (error) {
        console.log(error)
        return res.json({success:false,message:error.message})
    }
}

//function for single product info
const singleProduct = async(req,res)=>{
    try {
        const {productId}=req.body
        const product = await productModel.findById(productId)
        return res.json({success:true,product})
    } catch (error) {
        console.log(error)
        return res.json({success:false,message:error.message})
    }
}

export {listProducts,addProduct,removeProduct,singleProduct};