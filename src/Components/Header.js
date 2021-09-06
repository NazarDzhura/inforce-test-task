import React from 'react'
import Navigation from './Navigation'
import {Link} from 'react-router-dom'

function Header(){
    return (
        <header className="border-b p-3 flex justify-between items-center bg-gray-300">
            <Link to="/" className="font-bold text-xl" >
                Product List
            </Link>

            <Navigation />
        </header>
    )
}

export default Header