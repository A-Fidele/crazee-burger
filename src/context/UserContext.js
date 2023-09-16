import { createContext } from "react";

export default createContext({
    isAdmin: false,
    setIsAdmin: () => { },

    isCollapsed: false,
    setIsCollapsed: () => { },

    currentTabSelected: false,
    setCurrentTabSelected: () => { },

    menu: [],
    setMenu: () => { },
    
});