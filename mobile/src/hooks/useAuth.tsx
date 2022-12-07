import { useContext } from "react";

import { AuthContext, AuthContextDataProps } from "../contexts/Auth.context";

export function useAuth(): AuthContextDataProps {
    const context = useContext(AuthContext);

    return context;
}