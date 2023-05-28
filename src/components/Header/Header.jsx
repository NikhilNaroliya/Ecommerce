import "./Header.scss";

import {useEffect,UseState,UseContext } from 'react'
import { useNavigate } from "react-router-dom";
import {TbSearch} from 'react-icons/tb'
import {CgShoppingCart} from 'react-icons/cg'
import {AiOutlineHeart} from 'react-icons/ai'
import Search from './Search/Search'
import Cart from '../Cart/Cart'
import { Context } from "../../utils/context";


const Header = () => {
    return (
        <div className="main-header">
            <div className="header-content">
               
                <ul className="left">
                    <li>Home</li>
                    <li>About</li>
                    <li>Category</li>
                </ul>
                <div className="center">NikArt</div>
                <div className="right">
                    <TbSearch/>
                    <AiOutlineHeart/>
                    <span className="cart-icon">
                    <CgShoppingCart/>
                    <span>4</span>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Header;
