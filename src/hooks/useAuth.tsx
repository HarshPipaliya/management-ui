import { IUser } from "@types";
import { LocalItems, Routes } from "enum";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { getLocalItem, removeLocalItem, setLocalItem } from "utils";

export interface IAuthContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  logout: () => void;
}

interface IProps {
  children?: ReactNode;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: React.FC<IProps> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string>(
    getLocalItem(LocalItems.TOKEN) as string
  );

  const handleLogout = () => {
    setUser(null);
    setToken("");
    removeLocalItem(LocalItems.TOKEN);
    navigate(Routes.LOGIN);
  };

  const value = {
    user,
    token,
    setToken,
    setUser,
    logout: handleLogout,
  } as IAuthContext;
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default function useAuth() {
  return useContext(AuthContext) as IAuthContext;
}
