//4 && 7 & 16
import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({spotify}) { // spotify is the instance of the spotify web api 
                            // and we are passing it as a prop to the body component
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar/>
                <Body spotify={spotify}/>
            </div>
            <Footer/>
        </div>
        
    );
}

export default Player;