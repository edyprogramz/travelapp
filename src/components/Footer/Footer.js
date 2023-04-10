import './Footer.css';

import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { MdAccountBalance } from "react-icons/md";
import { AiFillTwitterSquare } from "react-icons/ai";

function Footer() {
    return (  
        <div className='footer'>
            <div className="top">
                <div>
                    <h1>logo</h1>
                    <p>To travel is to discover that everyone is wrong about other countries</p> 
                </div>
                <div>
                    <a href="#"><AiFillFacebook /></a>
                    <a href="#"><AiFillInstagram /></a>
                    <a href="#"><MdAccountBalance /></a>
                    <a href="#"><AiFillTwitterSquare /></a>
                </div>
            </div>
            <div className="bottom">
                <div id='links'>
                    <h3>Project</h3>
                    <a href="#">Changelog</a>
                    <a href="#">Status</a>
                    <a href="#">License</a>
                    <a href="#">All Versions</a>
                </div>
                <div id='links'>
                    <h3>Community</h3>
                    <a href="#">Github</a>
                    <a href="#">Issues</a>
                    <a href="#">Project</a>
                    <a href="#">Twitter</a>
                </div>
                <div id='links'>
                    <h3>Help</h3>
                    <a href="#">Support</a>
                    <a href="#">Troubleshooting</a>
                    <a href="#">Contact Us</a>
                </div>
                <div id='links'>
                    <h3>Others</h3>
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">License</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;