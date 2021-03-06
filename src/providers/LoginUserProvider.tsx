import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { User } from "../types/api/user";

export type LoginUserProviderType = {
  loginUser: User | null;
  setLoginUser: Dispatch<SetStateAction<User | null>>
}

export const LoginUserContext = createContext<LoginUserProviderType>({} as LoginUserProviderType)

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props
  const [loginUser, setLoginUser] = useState<User | null>(null)

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
}