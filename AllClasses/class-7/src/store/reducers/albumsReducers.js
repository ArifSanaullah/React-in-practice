import {
  GET_ALBUMS,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_FAIL
} from "../actionTypes";

const initialState = {
  albums: null,
  loadingAlbums: false,
  albumsErrorMessage: "",
  filteredAlbums: null
};

const albumsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        loadingAlbums: action.payload.loadingAlbums
      };
    case GET_ALBUMS_SUCCESS:
      return {
        ...state,
        loadingAlbums: action.payload.loadingAlbums,
        albums: action.payload.albums
      };
    case GET_ALBUMS_FAIL:
      return {
        ...state,
        albumsErrorMessage: action.payload.albumsErrorMessage,
        loadingAlbums: action.payload.loadingAlbums
      };
    default:
      return state;
  }
};

export default albumsReducers;
