import { NavbarData } from "./NavbarData";
import './Navbar.css';
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }


    render() { 
        return (  
            <div className="navbar">
                <h1>logo</h1>
                
                <div className="mobile-nav" onClick={this.handleClick}>{this.state.clicked ? <FaWindowClose /> : <FaBars />}</div>

                <ul id="nav-list" className={this.state.clicked ? "nav-list active" : "nav-list"}>
                    {NavbarData.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link to={item.url} className={item.cName}>
                                    <i>{item.icon}</i>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                    <button><Link to={'/signup'} id="sign">Sign Up</Link></button>

                </ul>
            </div>
        );
    }
}
 
export default Navbar;
