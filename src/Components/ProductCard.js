import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from "axios";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';

function ProductCard(props){
    const [showCard, setShowCard] = useState(true);
    function handleDelete(e) {
        axios.delete(`https://6135dcd860d2900017c3c1c0.mockapi.io/api/v1/products/${props.product.id}`)
            .then(r => console.log(r.data))
        setShowCard(false);
    }
    return (<div>
            {showCard ?
                <div className="border bg-gray-300 hover:bg-gray-400 shadow hover:shadow-2xl mb-4 rounded overflow-hidden">
                    <Link to={`/products/${props.product.id}`}>
                        <div
                            style={{
                                'backgroundImage': `url('${props.product.image}')`,
                                width: 280,
                                height: 260
                            }}
                            className="w-full h-64 bg-blue bg-cover"
                        >
                        </div>
                    </Link>
                    <div className="p-3">
                        <h3 className="font-bold text-xl mb-3">
                            <Link to={`/products/${props.product.id}`}>
                                {props.product.name}
                            </Link>
                        </h3>
                        <div className="font-bold mb-3">
                            Count: {props.product.count}
                        </div>
                        <div className="mb-3 italic">
                            {props.product.description.length > 25 ?
                                `${props.product.description.substring(0, 25)}...` : props.product.description
                            }
                        </div>
                        <Link
                            to={`/products/${props.product.id}`}
                            className="btn-green text-white p-2 flex justify-center w-full rounded-t"
                        >
                            View
                        </Link>

                        <Button
                            className="btn-warning"
                            onClick={(e) => {
                                handleDelete(e);
                            }}
                            variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon />}
                            fullWidth
                        >
                            delete
                        </Button>
                    </div>
                </div>
            :
                <div className="border bg-gray-300 hover:bg-gray-400 shadow mb-4 rounded overflow-hidden text-center pt-32" style={{height: 470}}>
                    <h1 className="font-bold text-xl mb-3">Product was successfully deleted</h1>
                </div>
            }
            </div>
    )
}

export default ProductCard;