import { Navigate } from "react-router";
import useAuth from "../shared/hooks/useAuth";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const auth = useAuth();
    if (auth.isAuthenticated && auth.path !== "/auth/register" && auth.path !== "/auth/login" ) {
        return <Navigate replace to="auth/login" />;
    }
    return children;
}