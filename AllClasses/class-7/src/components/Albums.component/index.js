import React, { Component } from "react";
import { connect } from "react-redux";
import usersMiddleware from "../../middlewares/usersMiddleware";
import albumsMiddleware from "../../middlewares/albumsMiddleware";
import getUserMiddleware from "../../middlewares/getUserMiddleware";

class Albums extends Component {
  componentDidMount() {
    const { usersMiddleware, albumsMiddleware } = this.props;
    usersMiddleware();
    albumsMiddleware();
  }

  render() {
    const {
      users,
      errorMessage,
      loading,
      getUserToBeFiltered,
      userToBeFiltered,
      albums: { albums }
    } = this.props;

    const filteredUser =
      users && users.filter((user) => user.name === userToBeFiltered);

    let requestedUser;
    filteredUser ? (requestedUser = filteredUser[0]) : (requestedUser = "");

    let userId;
    requestedUser && requestedUser
      ? (userId = requestedUser.id)
      : (userId = "");

    return (
      <div>
        <form action="">
          <label htmlFor="users">Get Albums by usernames: </label>
          <select
            name="users"
            id="users"
            value={loading ? "Loading users" : userToBeFiltered}
            onChange={(event) => getUserToBeFiltered(event)}
          >
            {loading && <option>Loading users</option>}
            {!loading && <option value="select">Select User</option>}
            {users ? (
              users.map((user) => {
                return (
                  <option value={user.name} key={user.id}>
                    {user.name}
                  </option>
                );
              })
            ) : (
              <option>{errorMessage}</option>
            )}
          </select>
        </form>
        <div>
          <h3>User: {userToBeFiltered}</h3>
          <h1>Albums: </h1>
          <div className="albums">
            <ol>
              {albums &&
                albums
                  .filter((album) => album.userId === userId)
                  .map((album) => (
                    <li key={album.id}>
                      <h3>{album.title}</h3>
                    </li>
                  ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.usersReducers,
  albums: state.albumsReducers
});

const mapDispatchToProps = (dispatch) => ({
  usersMiddleware: () => dispatch(usersMiddleware()),
  albumsMiddleware: () => dispatch(albumsMiddleware()),
  getUserToBeFiltered: (event) => dispatch(getUserMiddleware(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
