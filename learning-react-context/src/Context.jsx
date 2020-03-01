import React from 'react';

export const MyContext = React.createContext();

 const Provider = () => { 
    return <MyContext.Provider value={{currency: "pkr"}}>{}</MyContext.Provider>
}

export default Provider;
