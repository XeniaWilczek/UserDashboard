import type { User } from "../types/user.type";

export const initialState: User = {
  username: "Name",
  dateOfBirth: "0",
  gender: "Geschlecht",
  address: "Anschrift",
  email: "E-Mail",
  phoneNumber: 0,
  website: "Website",
  id: 0,
};

export type UserAction =
  | { type: "ADD_USER"; payload: User }
  | { type: "REMOVE_USER"; payload: number }
  | { type: "UPDATE_USER"; payload: User };

export function useUserReducer(state: User[], action: UserAction): User[] {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    case "REMOVE_USER":
      return state.filter((user) => user.id !== action.payload);
    case "UPDATE_USER":
      return state.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user,
      );
    default:
      return state;
  }
}
