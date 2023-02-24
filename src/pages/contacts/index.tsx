import Head from 'next/head';
import { Heading } from '@/components/heading';

const Contacts = () => {
	return (
		<>
			<Head>
				<title>Contact</title>
			</Head>
			<Heading text='Contacts list:' />
		</>
	);
};

export default Contacts;
