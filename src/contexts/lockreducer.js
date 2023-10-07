const LockReducer = (state, action) => {
    switch (action.type) {
        case "UNLOCK": {
            return {
                cameraLock: "unlock",
            };
        }
        case "LOCK": {
            return {
                cameraLock: "lock",
            };
        }
        case "DISCONNECT": {
            return {
                cameraLock: "disconnect",
            };
        }
        default:
            return state;
    }
}

export default LockReducer;