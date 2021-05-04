import {FETCH_MOVIES, SEARCH_MOVIE, FETCH_MOVIE, LOADING} from '../actions/types';


const initialState = {
    text : '', // searchtext
    movies: [], // comes from api data
    loading: false,
    movie: [] // single movie 
}

export default function(state = initialState, action){
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text:action.payload,
                loading:false
            };
        case FETCH_MOVIES:
            return{
                ...state,
                movies:action.payload,
                loading: false  //When the data arrive , Loading is going to finish
            };
            case FETCH_MOVIE:
            return{
                ...state,
                movie:action.payload,
                loading: false  //When the data arrive , Loading is going to finish
            };
            case LOADING:
                return{
                    ...state,
                    loading: true
                };
                default:
            return state
    }
}