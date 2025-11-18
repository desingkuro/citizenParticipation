import { useContext, useEffect, useState } from "react";
import { getData } from "../services/Http";
import { contextApp } from "../providers/context/ContextApp";
import type { ContextAppInterface } from "../interfaces/context";

const icons:{[key: string]: string} = {
    "home": "AiFillHome",
    "FolderKanban": "SiPlaycanvas",
    "Vote":"FaVote",
    "User":"FaUser",
    "Logout":"FaLogout",
    "Search":"FaSearch",
    "Add":"FaAdd",
    "Edit":"FaEdit",
    "Delete":"FaDelete",
    "Settings":"FaSettings",
}

export default function useSidebar() {
    const urlBase = import.meta.env.VITE_URL_API;
    const {state, dispatch}:ContextAppInterface = useContext(contextApp);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        if(state.sidebar && state.sidebar.length > 0){
            setLoading(false);
        }else{
            getSidebar();
        }
    }, [state]);

    const getSidebar = async () => {
        const response: any = await getData(urlBase + "api/v1/menu");
        if(response){
            dispatch({type: "SET_SIDEBAR", payload: response.menu});
        }
        setLoading(false);
        return response;
    }
    
    return {icons, loading, state};
}
