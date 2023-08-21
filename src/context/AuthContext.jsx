import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(false)
    

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;