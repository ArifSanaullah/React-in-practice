import {
  GET_ALBUMS,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_FAIL
} from "../actionTypes";

export const getAlbums = () => {
  return {
    type: GET_ALBUMS,
    payload: {
      loadingAlbums: true
    }
  };
};

export const getAlbumsSuccess = (albums) => {
  return {
    type: GET_ALBUMS_SUCCESS,
    payload: {
      loadingAlbums: false,
      albums
    }
  };
};

export const getAlbumsFail = (albumsErrorMessage) => {
  return {
    type: GET_ALBUMS_FAIL,
    payload: {
      loadingAlbums: false,
      albumsErrorMessage
    }
  };
};
