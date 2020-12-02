// TYPES AS CONST SO ITS EASIER TO SPOT ERRORS

// Get basic cfg obj from API and Genres for the sidebar

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const GET_USER_SUCCES = 'GET_USER_SUCCES';
export const GET_USER_FAIL = 'GET_USER_FAIL';

export const REGISTER_USER_SUCCES = 'REGISTER_USER_SUCCES';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';

export const CMT_USER_SUCCES = 'EVALUATE_USER_SUCCES';
export const CMT_USER_FAIL = 'EVALUATE_USER_FAIL';

export const SAVE_FILM_SUCCES = 'SAVE_FILM_SUCCES';
export const SAVE_FILM_FAIL = 'SAVE_FILM_FAIL';


export const GET_CONFIG = 'GET_CONFIG';
export const GET_GENRES = 'GET_GENRES';

// Set the selected menu on sidebar is valid
export const SELECTED_MENU = 'SELECTED_MENU';
export const REMOVE_SELECTED_MENU = 'REMOVE_SELECTED_MENU';

// Fetching
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_CAST = 'FETCH_CAST';
export const FETCH_MOVIES_GENRE = 'FETCH_MOVIES_GENRE';
export const FETCH_MOVIES_DISCOVER = 'FETCH_MOVIES_DISCOVER';
export const FETCH_MOVIES_SEARCH = 'FETCH_MOVIES_SEARCH';
export const FETCH_MOVIES_RECOMMENDED = 'FETCH_MOVIES_RECOMMENDED';
export const FETCH_PERSON = 'FETCH_PERSON';
export const FETCH_RECOMMENDATIONS = 'FETCH_RECOMMENDATIONS';
export const FETCH_MOVIESPERSON = 'FETCH_MOVIESPERSON';

// LOADINGS
// geral loading
export const SET_LOADING = 'SET_LOADING';
export const REMOVE_LOADING = 'REMOVE_LOADING';

// movies loading
export const FETCH_MOVIES_LOADING = 'FETCH_MOVIES_LOADING';
export const FETCH_MOVIES_FINISHED = 'FETCH_MOVIES_FINISHED';

// single movie loading
export const FETCH_MOVIE_LOADING = 'FETCH_MOVIE_LOADING';
export const FETCH_MOVIE_FINISHED = 'FETCH_MOVIE_FINISHED';

// fetching person loading
export const FETCH_PERSON_LOADING = 'FETCH_PERSON_LOADING';
export const FETCH_PERSON_FINISHED = 'FETCH_PERSON_FINISHED';

// Fetching recommendations
export const FETCH_RECOMMENDATIONS_LOADING = 'FETCH_RECOMMENDATIONS_LOADING';
export const FETCH_RECOMMENDATIONS_FINISHED = 'FETCH_RECOMMENDATIONS_FINISHED';

//Fetch movie by actor
export const FETCH_MOVIESPERSON_LOADING = 'FETCH_MOVIESPERSON_LOADING';
export const FETCH_MOVIESPERSON_FINISHED = 'FETCH_MOVIESPERSON_FINISHED';

//Errors
export const INSERT_ERROR = 'INSERT_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';
