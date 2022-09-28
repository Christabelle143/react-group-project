import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import MissionsReducer from './missions/fetchMissionData';

const rootReducer = combineReducers({
  missions: MissionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;