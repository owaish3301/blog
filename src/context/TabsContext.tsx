import { createContext, useState } from "react";
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

export { TabsContext, TabsProvider}