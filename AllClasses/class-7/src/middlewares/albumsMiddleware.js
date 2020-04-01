import * as albumsActions from "../store/actions/albumsActions";
import axios from "axios";

const SERVER_PATH = "https://jsonplaceholder.typicode.com/albums";

const albumsMiddleware = () => {
  return (dispatch) => {
    dispatch(albumsActions.getAlbums());
    axios
      .get(SERVER_PATH)
      .then((resp) => {
        dispatch(albumsActions.getAlbumsSuccess(resp.data));
      })
      .catch((err) => {
        dispatch(albumsActions.getAlbumsFail(err.message));
      });
  };
};

export default albumsMiddleware;
