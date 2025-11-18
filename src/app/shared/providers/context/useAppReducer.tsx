import { useReducer } from "react";
import type { MenuItem } from "../../interfaces/sidebar";


export interface InitialStateInterface {
    sidebar: MenuItem[];
    user: any;
}
export const initialState: InitialStateInterface = {
    sidebar: [],
    user: {},
}

function reducer(state: InitialStateInterface, action: any) {
    switch (action.type) {
        case "SET_SIDEBAR":
            return { ...state, sidebar: action.payload };
        case "SET_USER":
            return { ...state, user: action.payload };
        default:
            return state;
    }
}

const useAppReducer = (initialState: InitialStateInterface) => {
    return useReducer(reducer, initialState);
}

export default useAppReducer;