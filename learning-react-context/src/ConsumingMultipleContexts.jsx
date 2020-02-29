import React from "react";

const ThemeContext = React.createContext("light"); //defaults to light theme

// signed-in user

const UserContext = React.createContext({ name: "Guest" });

export default function ConsumingMultipleContexts(props) {
  const { signedInUser, theme } = props;
  return (
    <div>
      {" "}
      {/* Component that provides initial context values */}
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  );
}

// A component may consume multiple contexts
function Content() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => <ProfilePage user={user} theme={theme} />}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

function Sidebar() {
  return <button style={{}} >Sidebar</button>;
}

function ProfilePage() {
  return <button>ProfilePage</button>;
}
