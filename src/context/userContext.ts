import { createContext, useContext, type Dispatch } from "react";
import type { User } from "../types/user.type";
import type { UserAction } from "../hooks/useUserReducer";

//Schablone für UserContext festlegen
interface UserContextType {
  users: User[];
  dispatch: Dispatch<UserAction>;
}

//Kontext erstellen
export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUserContext muss im Provider liegen");
  return context;
}
