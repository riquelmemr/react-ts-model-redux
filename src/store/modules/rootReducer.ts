import { combineReducers } from '@reduxjs/toolkit';

import userLoggedSlice from './users/usersSlice';

const rootReducer = combineReducers({
	userLogged: userLoggedSlice,
});

export default rootReducer;
