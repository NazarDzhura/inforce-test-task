import React from 'react'
import {Link} from 'react-router-dom'
import axios from "axios";

function ProductCard(props){
    return (
        <div className="border bg-gray-300 hover:bg-gray-400 shadow mb-4 rounded overflow-hidden">
            <Link to={`/products/${props.product.id}`}>
                <div
                    style={{
                        'backgroundImage': `url('${props.product.image}')`,
                    }}
                    className="w-full h-64 bg-blue bg-cover"
                >
                </div>
            </Link>
            <div className="p-3">
                <h3 className=" font-bold text-xl mb-3">
                    <Link to={`/products/${props.product.id}`}>
                        { props.product.name }
                    </Link>    
                </h3>
                <div className="font-bold mb-3">
                    Count: { props.product.count }
                </div>
                <div className="mb-3 italic">
                    { props.product.description }
                </div>
                <Link 
                    to={`/products/${props.product.id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 flex justify-center w-full rounded-t"
                >
                    View
                </Link>
                <button className="bg-red-500 hover:bg-red-600 text-white p-2 flex justify-center w-full rounded-b">Delete</button>
            </div>
        </div>
    )
}

export default ProductCard