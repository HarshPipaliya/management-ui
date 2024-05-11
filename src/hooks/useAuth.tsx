import { IUser } from "@types";
import { LocalItems } from "enum";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { getLocalItem } from "utils";

export interface IAuthContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

interface IProps {
  children?: ReactNode;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: React.FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string>(
    getLocalItem(LocalItems.TOKEN) as string
  );
  const value = {
    user,
    token,
    setToken,
    setUser,
  } as IAuthContext;
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default function useAuth() {
  return useContext(AuthContext) as IAuthContext;
}
