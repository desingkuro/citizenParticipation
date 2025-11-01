import { useEffect, useState } from "react";
import { getData } from "../services/Http";

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
    const [sidebar, setSidebar] = useState<any>(null);

    useEffect(() => {
        getSidebar();
    }, []);

    const getSidebar = async () => {
        const response: any = await getData(urlBase + "api/v1/menu");
        if(response){
            setSidebar(response);
            console.log(response);
        }
        return response;
    }
    
    return {sidebar, icons};
}
