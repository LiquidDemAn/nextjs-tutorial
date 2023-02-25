export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
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
