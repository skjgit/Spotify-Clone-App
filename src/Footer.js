//10&15
import React from "react";
import "./Footer.css";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleIcon from "@material-ui/icons/PlayCircleFilled";
import SkipNextIcon from "@material-ui/icons/SkipNext";  
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import {Grid,Slider} from "@material-ui/core";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlayListPlayIcon from "@material-ui/icons/PlaylistPlay";
import PhonelinkIcon from "@material-ui/icons/Phonelink";
import HeartIcon from "@material-ui/icons/FavoriteBorder";
function Footer(){
    return (
        <div className="Footer">
            <div className="footer_left">
                <img 
                className="footer_albumLogo"
                src="https://c.saavncdn.com/088/Aaj-Ke-Baad-From-Satyaprem-Ki-Katha-Hindi-2023-20230612193647-500x500.jpg" alt="songcoverpage"/>
                <div>
                <h5>Aaj Ke baad (from "SKK")</h5>
                <p>Manan Bhardwaj</p>
                </div>
                <HeartIcon className="footer_heart"/>
            </div>
            <div className="footer_center" >
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon"/>
                <PlayCircleIcon fontSize="large" className="footer_icon"/>
                <SkipNextIcon className="footer_icon"/>
                <RepeatIcon className="footer_green"/>
            </div>
            <div className="footer_right">
                <Grid container spacing={3}>
                <Grid item>
                    <PlayListPlayIcon/>
                </Grid>
                <Grid item>
                    <PhonelinkIcon/>
                </Grid>
                <Grid item>
                    <VolumeDownIcon/>
                </Grid>
                <Grid item xs>
                    <Slider/>
                </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;