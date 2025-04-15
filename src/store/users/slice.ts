import { createSlice } from "@reduxjs/toolkit";


export interface User {
    name: string;
    email: string;
    github: string;
}

export interface UsersState extends User {
    id: string;
}

const initialState: UsersState[] = [
    {
    id: "1",
    name: "kam",
    email: "kam@gmail.com",
    github: "kamdevo",
  },
  {
    id: "2",
    name: "midu",
    email: "midu@gmail.com",
    github: "midudev",
  },
  {
    id: "3",
    name: "sarah",
    email: "sarah@gmail.com",
    github: "sarita",
  },
] 

export const usersSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {},
}); 

export default usersSlice.reducer;