import React, { createContext, useState } from "react";

// Aktueller Wert was zugegriffen wird
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

// Die Variablen/Funktionen sind in den Nodes erreichbar
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}