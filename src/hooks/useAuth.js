const { createContext, useContext, useState } = require("react");

const AuthContext = createContext()

export function ProviderAuth({children}) {
    const auth =userProviderAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
};

function userProviderAuth() {
    const [user, setUser] = useState(null);

    const signIn = async(email, password) => {
        setUser('login');
    }

    return {
        user,
        signIn,
    }
}