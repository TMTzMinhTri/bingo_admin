import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '..';
import { ITabReducer } from './types';

const getTabState = (state: AppState): ITabReducer => state.tab;

export const selectListTabs = createSelector(getTabState, (tabState) => Object.values(tabState.tabs));

export const selectCurrentTab = createSelector(getTabState, (tabState) => tabState.currentTab);
