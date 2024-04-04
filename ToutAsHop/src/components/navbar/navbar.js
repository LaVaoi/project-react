import { Link } from "react-router-dom"
import { useState } from "react"
import login from '../image/user.png'
import './navbar.css'
import logo from '../image/logo.png'

const NavBar = ({cartItemCount }) => {

    return (
        <div className="wrapper">
            <header className="container">
                <div className="header py-2">
                    <div className="grid">
                        <Link to="/" className="link-brand">
                            <a><img className="brand" src={logo}/></a>
                        </Link>
                        <div className="inscri">
                            <Link to='/dashboard'>
                                <button >Login</button>
                            </Link>
                        </div>
                        <Link to="/cart" className="link headerCart">
                            <img className="cartImg" src="/cart.svg" alt="cart" />
                            {cartItemCount > 0 && (
                                <div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}</div>
                            )}
                        </Link>
                        <div className="para-lient">
                            <p>Il n'ya pas du Lien ici ,obliger d'etre utiliser notre site!!</p>
                        </div> 
                    </div>
                </div>
            </header>
        </div>
    )
}

export { NavBar }