import React from 'react'
import FormDialog from "./FormDialogs/FormDialog";
import {Link} from 'react-router-dom'

function Header(){
    return (
        <header className="border-b p-3 flex justify-between items-center bg-gray-300" style={{background: "#24292f"}}>
            <Link to="/" className="ml-8" style={{fontSize: 25, color: "#FFFFFF"}} >
                Product List
            </Link>
            <FormDialog />

        </header>
    )
}

export default Header;