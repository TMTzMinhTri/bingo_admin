import { combineReducers } from 'redux';
import globalSlice from './global';
import tabSlice from './tab';
import modalSlice from './modal';

export default combineReducers({
  [globalSlice.name]: globalSlice.reducer,
  [tabSlice.name]: tabSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
});
