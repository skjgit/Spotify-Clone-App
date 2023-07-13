//3
export const authEndpoint = "https://accounts.spotify.com/authorize";

// we use the client id to identify our app to spotify

const redirectUri = "http://localhost:3001/";
// what is the redirect uri?- it is the uri that spotify will redirect the user to after they have logged in
// and we are using it for the development purposes

const clientId = "0d51964b447e4de2bdb16c4350821bec";
// client id is the id that we get from the spotify developer dashboard

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];
// scopes are the permissions that we are asking the user to give us

export const getTokenFromUrl = () => {  // this function is used to get the token from the url

    return window.location.hash
    .substring(1) //substring in js is used to remove the #(here) from the url
    .split('&')  // this is used to split the url into different parts
    .reduce((initial, item) => {
        // #accessToken=mysupersecretkey&name=saksham&abc
        let parts = item.split('=');
        initial[parts[0]]=decodeURIComponent(parts[1]);

        return initial;
    }, {
    })
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20")}&response_type=token&show_dialog=true`;
    // what is token? - it is a short lived token(just a string) that lets us do requests on behalf of the user
    // what is response_type? - it is the type of response that we want from the spotify api
    // what is show_dialog? - it is a boolean value that tells us whether we want to show the dialog or not
    // what is scope? - it is the permissions that we are asking the user to give us
    // we are using the join function to join the scopes array with %20