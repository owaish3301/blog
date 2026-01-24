/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";
import { tabItems } from "../Constants/tabs";
import type { TabItemsTypes } from "../Constants/tabsType";

interface TabsContextType  {
    tabs: TabItemsTypes[],
    switchTab : (id : string) => void
}

const TabsContext = createContext<null | TabsContextType>(null);

const TabsProvider = ({ children} : {children : React.ReactNode } ) => {
    const [tabs, setTabs ] = useState(tabItems);

    const switchTab = (id: string) => {
        setTabs((prev) => prev.map((tab)=> tab.name === id ? {...tab, isActive : true}: {...tab, isActive : false}) )
    }

    return (<TabsContext.Provider value={{tabs, switchTab}}> {children} </TabsContext.Provider>)
}

const useTabs = () =>{
    const context = useContext(TabsContext);
    if (!context) {
      throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
}
export { TabsContext, TabsProvider, useTabs}