//9&17&21(body_songs)
import React from "react";
import "./Body.css";
import Header from "./Header";
import {UseDataLayerValue} from "./DataLayer";
import PlayCircleIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow"
function Body({spotify}){
    const [{discover_weekly},dispatch]= UseDataLayerValue();
    
    
    
  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:337i9dQZEVXcRTmZVLJiRdu`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
    
    
    return (
        <div className="Body">
            <Header spotify={spotify}/>
            <div className="Body__info">
                <img src={discover_weekly?.images[0]?.url}
                 height="200px" alt=""/>

                <div class="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <hr/>
           
            <div class="body_songs">
                <div className="body_icons">
                    <PlayCircleIcon className="body_shuffle"/>
                    <FavoriteIcon  fontSize="large"/>
                    <MoreHorizIcon />
                </div>

                {discover_weekly?.tracks.items.map((item) =>(
                    <SongRow track={item.track}/>
                ))}

            </div>
        </div>

    );
}

export default Body;
