import { combineReducers } from 'redux';
import globalSlice from './global';
import tabSlice from './tab';
import modalSlice from './modal';
import notificationSlice from './notification';

export default combineReducers({
  [globalSlice.name]: globalSlice.reducer,
  [tabSlice.name]: tabSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
  [notificationSlice.name]: notificationSlice.reducer,
});
