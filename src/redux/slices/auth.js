import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  profileType: 'company',
};

const authSlice = createSlice({
  name: 'splash',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },

    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },

    setProfileType: (state, action) => {
      state.profileType = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
