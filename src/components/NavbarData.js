import { AiTwotoneHome } from "react-icons/ai";
import { IconName } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { BsBriefcaseFill } from "react-icons/bs";
import { RiContactsBookFill } from "react-icons/ri";

export const NavbarData = [
    {
        "title": "Home",
        "cName": "nav-links",
        "url": "/",
        "icon": <AiTwotoneHome />
    },
    {
        "title": "About",
        "cName": "nav-links",
        "url": "/about",
        "icon": <BsFillInfoCircleFill />
    },
    {
        "title": "Service",
        "cName": "nav-links",
        "url": "/service",
        "icon": <BsBriefcaseFill />
    },
    {
        "title": "Contact",
        "cName": "nav-links",
        "url": "/contact",
        "icon": <RiContactsBookFill />
    },
    {
        "title": "Sign Up",
        "cName": "sign-up",
        "url": "/signup",
    }
]