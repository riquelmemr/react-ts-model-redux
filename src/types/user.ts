export interface User {
	id: string;
	name: string;
	email: string;
	isLogged: boolean;
}

export type SetUserLogged = Omit<User, 'isLogged' | 'id'>;
