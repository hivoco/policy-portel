import { createContext, useState } from "react";

export const UserDataContext = createContext();

const UserDataContextProvider = ({ children }) => {
  const [data, setData] = useState("")

  return (
    <UserDataContext.Provider value={{ data, setData }}>
      {children}
    </UserDataContext.Provider>
  )
};

export default UserDataContextProvider;
