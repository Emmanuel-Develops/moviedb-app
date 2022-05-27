import { setServers } from "dns";
import { isPersistedState } from "helpers";
import React, { useState, useEffect } from "react";

// Types
type Props = {
    children: React.ReactNode;
};

type User = {
    sessionId: string;
    username: string;
};

type userContext = {
    user: User;
    setUser: (a: User) => void;
    handleLogin: (a: User) => void;
};

export const Context = React.createContext<userContext>({} as userContext);

const UserProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = useState<User>({} as User);

    const handleLogin = (user: User): void => {
        setUser(user)
        sessionStorage.setItem("user", JSON.stringify(user));
    }
    
    useEffect(() => {

        const sessionUser = isPersistedState("user");
        if (!user.username && sessionUser) setUser(sessionUser);

    }, []);

    return <Context.Provider value={{ user, setUser, handleLogin }}>{children}</Context.Provider>;
};

export default UserProvider;
