import React, {useState ,useContext} from 'react';
import {User,Users} from '../Components/Users';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider(props){
    const [authUser,setAuthUser] = useState(new User('','',''));
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [authUsers, setAuthUsers] = useState(new Users());

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn,
        authUsers,
        setAuthUsers
    }

    return(
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}