import { createSlice } from '@reduxjs/toolkit';
import { IGlobalReducer } from './types';

const initialState: IGlobalReducer = {
  themeMode: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeTheme: (state) => {
      return {
        ...state,
        themeMode: !state.themeMode,
      };
    },
  },
});

export const { changeTheme } = globalSlice.actions;
export default globalSlice;
