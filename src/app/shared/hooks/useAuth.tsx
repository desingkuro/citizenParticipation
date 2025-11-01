import { useEffect, useState } from "react";
import { useLocation } from "react-router";

interface Auth {
    isAuthenticated: boolean;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
    path:String
}

export default function useAuth(): Auth {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [path,setPath] = useState<String>("/")
    const location = useLocation();
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        setPath(location.pathname);
        if (token) {
            setIsAuthenticated(true);
        }
    }, [])
    return {
        isAuthenticated,
        setIsAuthenticated,
        path
    }
}