import React, { useEffect, useState} from "react";
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from"./Player";
import {UseDataLayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi(); // this is the instance of the spotify web api
function App() {
  // Run code based on a given conditions


  // const[token,setToken] = useState(null);// useStste is a short term memory storage in react , e.g if we refresh the page then the useState will be cleared 
    // we are using useState to store the token that we get from the spotify api
    /*****IMPORTANT *********/
  const[{user,token},dispatch] = UseDataLayerValue(); // [{i.e user or song or playlists etc},dispatch] this is used to pull the data from the data layer, [{},dispatch] used to pull the user from the data layer
 // or dataLayer.user gives us the user from the data layer
  useEffect(() => {
    const hash= getTokenFromUrl();
    window.location.hash=""; // this is for security purposes 

    const _token = hash.access_token; /* here hash is the object that we get from the getTokenFromUrl function 
    and access_token is the key that we get from the spotify api*/
    
    if(_token){
      /* setToken(_token)   // we are setting the token to the _token that we get from the spotify api
       Now the main token is getting used*/ 
      if(_token){
        dispatch({
          type:'SET_TOKEN',
          token:_token, // payloaded token
        })
      }
      spotify.setAccessToken(_token); // this is used to set the access token to the spotify api

      spotify.getMe().then((user) => {
        dispatch({
          type:'SET_USER',
          user:user,
        })
      })

      spotify.getUserPlaylists().then((playlists) => { // this is used to get the playlists from the spotify api
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        });
      });
        

    }

    console.log("I have a token", token);


  },[token,dispatch]);

  /* console.log('🧑',user);
  console.log('👽',token); */ // used to debug the code


  return (
    <div className="App">
      {
        token ? 
        <Player /> : (
          <Login /> /* Login Component */
        )
      }
    </div>

  );
}

export default App;
