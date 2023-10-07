import { createContext, useEffect, useReducer } from "react";
import LockReducer from './lockreducer';

const INITIAL_STATE = {
    cameraLock: "unlock",
};

export const LockContext = createContext(INITIAL_STATE);

export const LockContextProvider = ({ children }) => {
    const [state, dispatchLock] = useReducer(LockReducer, INITIAL_STATE)

    return (
        <LockContext.Provider value={{ cameraLock: state.cameraLock, dispatchLock }}>
            {children}
        </LockContext.Provider>
    )
}