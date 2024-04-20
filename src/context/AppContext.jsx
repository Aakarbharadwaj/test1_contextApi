import React, { createContext, useState } from 'react'


export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    }
    const sub = () => {
        setCount(count - 1);
    }
    const value = {
        count,
        setCount,
        add,
        sub
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider