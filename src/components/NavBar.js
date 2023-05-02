import React from "react";
import logo from "../airbnb 1.png"

export default function NavBar () {
    return (
        <nav className="navbar">
            <img src={logo} alt="" className="nav--logo"/>
        </nav>
    )
}