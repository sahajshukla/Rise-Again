import React, {useState, useEffect} from "react";
import {useAuth} from '../contexts/AuthContext';


export const UserContext = React.createContext();
export const UserProvider = ({ children }) =>{
  const [currentUser, setCurrentUser] = useState();

  useEffect(() =>{
    useAuth.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  },[]);
  return <UserContext.Provider value = {currentUser}>{children}</UserContext.Provider>;
}
