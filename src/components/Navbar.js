import React, { Component } from 'react';
import logo from "../images/logo.svg";
import {FaAlignRight} from "react-icons/fa";
import {Link} from "react-router-dom"

export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle =()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return <nav className="navbar">
            <div className="nav-center">
               <div className="nav-header">
                   <Link to="/">
                       <img src={logo} alt="Beach Resort"/>
                   </Link>

               </div>
            </div>
        </nav>

    }
}
