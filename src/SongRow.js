// 23
import React from 'react';
import "./SongRow.css";


function SongRow({ track, playSong }){
    console.log(track);
    // this function is used to display the song row
    return (
        <div className="songRow" onClick={() => playSong(track.id)}>
            <img className="songRow__album" src={track.album.images[0].url} alt=""/>
            <div class="songRow_info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow;