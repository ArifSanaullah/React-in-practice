import React from 'react';
// import Theme from "./Theme";
import { MyContext } from "./Context";
import Page from './components/Page.component';

function App() {
  return (
    <div>
      {/* <Theme /> */}
      <MyContext.Provider>
        <Page />
      </MyContext.Provider>
    </div>
  );
}

export default App;
