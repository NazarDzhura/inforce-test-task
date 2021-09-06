import React from 'react'
import { Link } from "react-router-dom"
import {FloatingLabel, Form, FormControl} from "react-bootstrap";

function NavigationMenu(props){
    return (
        <div>
            <div className="font-bold py-3">
                Describe the product you want to add
            </div>
            <div>
                <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
                    <Form.Control as="textarea" placeholder="Leave a comment here" style={{width: '500px' }}/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
            </div>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className="text-blue-500 py-3 border-t border-b block"
                        onClick={props.closeMenu}
                    >
                        Add product
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/"
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        Cancel
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu