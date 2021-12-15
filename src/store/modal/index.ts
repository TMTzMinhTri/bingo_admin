import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModalReducer, ModalOptions } from './types';

const initialState: IModalReducer = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<ModalOptions>) => {
      return {
        ...state,
        ...(action && { ...action.payload }),
        isOpen: true,
      };
    },
    close: (state) => {
      return {
        ...state,
        isOpen: false,
      };
    },
  },
});

const actions = { ...modalSlice.actions };
export { actions as modalActions };

export default modalSlice;
