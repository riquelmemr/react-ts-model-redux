import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../..';
import { SetUserLogged, User } from '../../../types/user';

// Utilização para criar um slice é necessário somente quando o dado for diferente de um Array

// Define the initial state using that type
const initialState: User = {
	id: '',
	name: '',
	email: '',
	isLogged: false,
};

export const userLoggedSlice = createSlice({
	name: 'userLogged',
	initialState,
	reducers: {
		setUserLogged: (state, action: PayloadAction<SetUserLogged>) => {
			return {
				id: new Date().toString(),
				name: action.payload.name,
				email: action.payload.email,
				isLogged: true,
			};
		},

		removeUserLogged: (state) => {
			return initialState;
		},
	},
});

export const { setUserLogged, removeUserLogged } = userLoggedSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserLogged = (state: RootState) => state.userLogged;

export default userLoggedSlice.reducer;
