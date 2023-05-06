import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../..';

// Utilização para criar um slice é necessário somente quando o dado for diferente de um Array

// Define a type for the slice state
interface UserLogged {
	id: string;
	name: string;
	email: string;
	isLogged: boolean;
}

export type SetUserLogged = Omit<UserLogged, 'isLogged' | 'id'>;

// Define the initial state using that type
const initialState: UserLogged = {
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
