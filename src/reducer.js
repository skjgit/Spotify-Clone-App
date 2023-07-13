//4
export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,

    // REMOVE AFTER FINISHED DEVELOPING...
    //token:"BQCJ6uNrOoF-QK2UN3jRFJOhP8xIu_FcAWLhOv5RyVOjAE1MRC0BK9UkrgNls23ENlPmvikxWcspSe8ceNU-9fyBf1T4FDObiohs0SpsRBoO46-Ok4DGPBznaBwQRascGZOaQnnLeS8pQ3jFD-z0H5ftw2CytQWChPcF4EkOem9KNl6Vrj7Q2Ox_-N9M9TG5nIWbuZlwq46Q07O8F7aF"
};

// what is reducer? - it is used to *listen* to the action that we are getting from the spotify api
const reducer = (state,action) =>{  // action is used to manipulate the data layer
    console.log(action);  //this is used to debug the code


    // Action -> type,[payload]
    switch(action.type){
        case 'SET_USER':  
          // what is case? - it is used to check the type of action that we are getting
          // as here we are getting the action of type SET_USER
            return{
                ...state, // this is used to return the state as it is
                user:action.user, // this is used to set the user to the user that we get from the spotify api
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token,
            }
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists:action.playlists,
            }    
        default:
            return state;
    }
}

export default reducer;