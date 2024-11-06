import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  users: [],
};
const exampleSlice = createSlice({
  name: "Add And Remove User Slice",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      const userData = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(userData);
    },
    removeUsers: (state, action) => {
      const userData = state.users.filter((user) => user.id !== action.payload);
      state.users = userData;
    },
  },
});
export const { addUsers, removeUsers } = exampleSlice.actions;
export default exampleSlice.reducer;
