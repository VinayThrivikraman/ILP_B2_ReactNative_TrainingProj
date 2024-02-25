import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface userLoginData {
  token: string;
  user_id: string;
  message: string;
  status: boolean;
}
const initialState: userLoginData = {
  token: '',
  user_id: '',
  message: '',
  status: false,
};
export const userDataSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userDetails(state: userLoginData, action: PayloadAction<userLoginData>) {
      state.token = action.payload.token;
      state.message = action.payload.message;
      state.user_id = action.payload.user_id;
      state.status = action.payload.status;
    },
  },
});

export const {userDetails} = userDataSlice.actions;
export default userDataSlice.reducer;
