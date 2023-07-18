// 8&11
import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import {UseDataLayerValue} from "./DataLayer";

import SidebarOption from "./SidebarOption";


function Sidebar(){
    const[{playlists},dispatch] = UseDataLayerValue();
    // it is used to pull the playlists from the data layer
    return (
        <div class="Sidebar">
            <div class="Sidebar__top">
                <SidebarOption Icon = {HomeIcon} title="Home"/>
                <SidebarOption Icon = {SearchIcon} title="Search"/>
            </div>
            <div class="Sidebar__bottom">
            <div>
            <SidebarOption Icon = {LibraryMusicIcon} title="Your Library"/>
            </div>
            <div className="Contents">
                <div className="playlists">
                <SidebarOption title="Playlists"/>
                </div>
                <div className="artists">
                <SidebarOption title="Artists"/>
                </div>
                <div className="albums">
                <SidebarOption title="Albums"/>
                </div>
                <div className="shows">
                <SidebarOption title="Shows"/>
                </div>
            </div>
            <div className="playlist__list">
                {playlists?.items?.map((playlist) =>(
                    <SidebarOption title={playlist.name}/>
                ))}
            </div>
            </div>
        </div>

    //     <div className="Sidebar">
    //     <SidebarOption Icon={HomeIcon} option="Home" />
    //     <SidebarOption Icon={SearchIcon} option="Search" />
    //     <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
    //     <br />
    //     <strong className="sidebar__title">PLAYLISTS</strong>
    //     <hr />
    //     {playlists?.items?.map((playlist) => (
    //       <SidebarOption option={playlist.name} />
    //     ))}
    //   </div>
    );
}

export default Sidebar;