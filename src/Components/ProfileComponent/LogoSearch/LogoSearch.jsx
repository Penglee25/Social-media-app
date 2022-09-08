import { UilSearch } from '@iconscout/react-unicons';
import React from "react";
import Logo from '../../../Img/logo.png';
import './LogoSearch.css';

const LogoSearch = () => {
    return (
        <div className="LogoSearch">
            <img src={Logo} alt="" />
            <div className="Search">
                <input type="text" placeholder="#Trending"/>
                <div className="s-icon">
                    <UilSearch/>
                </div>
            </div>
        </div>
    )
}

export default LogoSearch