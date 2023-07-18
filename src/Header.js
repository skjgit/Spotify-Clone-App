// 18
import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import {Avatar} from "@material-ui/core";
import { useEffect } from "react";
//20
import {UseDataLayerValue} from "./DataLayer";
function Header(){
    const [{user},dispatch] = UseDataLayerValue();
    return (
    <div >
        <div className="header">
        <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
        </div>
            <div className="header_right">
            <Avatar src={user?.images[0]?.url} 
            alt={user?.display_name}/>
            <h3>{user?.display_name}</h3>
            </div>    
        </div>

    </div>
    );

}

export default Header;