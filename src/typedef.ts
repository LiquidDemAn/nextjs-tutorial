export type AddressType = {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
};

export type UserType = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: AddressType;
};

export type PostType = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export type SocialType = {
	id: number;
	icon: string;
	path: string;
};
