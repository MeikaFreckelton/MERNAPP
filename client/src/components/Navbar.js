import React from 'react'
import {Link} from 'react-router-dom'
import './../styles/Navbar.css'

// put logo in here to the left and have everyhting else float to the right

const Navbar = () => {



    return (
        <div>
            <div id="navbar">
                <Link className="navLinkStyles" to="/">Home</Link>
                <Link className="navLinkStyles" to="/posts/new">New Post</Link>
                <Link className="navLinkStyles" to="/profiles">Developers</Link>
                <Link className="navLinkStyles" to="/auth/register">Register account</Link>
                <Link className="navLinkStyles" to="/auth/signin">Sign in</Link>
            </div>
            

        </div>
    )
}



export default Navbar