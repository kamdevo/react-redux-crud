import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string


const DEFAULT_STATE = [
  {
    id: "1",
    name: "kamiro",
    email: "camilomoralesyk@gmail.com",
    github: "kamdevo" 
  },
  {
    id: "2",
    name: "kamiro",
    email: "camilomoralesyk@gmail.com",
    github: "kamdevo" 
  },
  {
    id: "3",
    name: "kamiro",
    email: "camilomoralesyk@gmail.com",
    github: "kamdevo" 
  }
]

export interface user {
  name: string;
  email: string;
  github: string;
}

export interface usersWithId extends user {
  id: UserId;
}

const initialState: usersWithId[] = (() => {
  const persistedState = localStorage.getItem("__redux__state__");
  if (persistedState) {
    return JSON.parse(persistedState)
  }else {
    return DEFAULT_STATE
  }
})()


export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<user>) => {
      const id = crypto.randomUUID();
      return [...state, {id, ...action.payload}]
    },

    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id)
    }

  }
})

export default usersSlice.reducer;
export const {deleteUserById, addNewUser } = usersSlice.actions;