import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '..';
import { IModalReducer } from './types';

const getModalState = (state: AppState): IModalReducer => state.modal;

export const selectModalState = createSelector(getModalState, (state) => state);
