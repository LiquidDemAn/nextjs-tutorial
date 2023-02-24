import React, { ReactElement } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';

type Props = {
	children: ReactElement | ReactElement[];
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};
