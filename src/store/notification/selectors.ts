import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '..';
const getNotifications = (state: AppState) => state.notification;

export const selectNotifications = createSelector(getNotifications, (state) => state.notifications);
