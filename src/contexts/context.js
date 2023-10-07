import { createContext, useEffect, useReducer } from "react";
import PageReducer from './reducer';

const INITIAL_STATE = {
    currentPage: "about",
};

export const PageContext = createContext(INITIAL_STATE);

export const PageContextProvider = ({ children }) => {
    const [state, dispatchPage] = useReducer(PageReducer, INITIAL_STATE)

    return (
        <PageContext.Provider value={{ currentPage: state.currentPage, dispatchPage }}>
            {children}
        </PageContext.Provider>
    )
}