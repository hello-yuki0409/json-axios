import React, { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState(false);

  return (
    // グローバルに参照できるようにするには、providerのvalueというプロップスに渡すことで、グローバルなstateとして定義
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
