import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'
import ProductCard from "../Components/ProductCard";

function Product(){
    const { id } = useParams()
    // You can create your own Mock API: https://mockapi.io/
    const url = `https://6135dcd860d2900017c3c1c0.mockapi.io/api/v1/products/${id}`
    
    let product = useAxiosGet(url)

    let content = null

    if(product.error){
        content = <div>
            <div className="bg-blue-300 mb-2 p-3">
                If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
            </div>
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    if(product.loading){
        content = <Loader/>
    }

    if(product.data){
        content = 
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {product.data.name}
            </h1>
            <div>
                <img
                    src={product.data.image}
                    alt={product.data.name}
                />
            </div>
            <div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 flex justify-center w-1/2 rounded">Edit</button>
            </div>
            <div className="font-bold text-xl mb-3">
                Count: {product.data.count}
            </div>
            <div>
                Description: {product.data.description}
            </div>
            <div>
                Color: {product.data.color}
            </div>
            <div>
                Weight: {product.data.weight} g
            </div>
        </div>
    }

    return (
        <div className="container mx-auto">
            {content}
        </div>
    )
}

export default Product