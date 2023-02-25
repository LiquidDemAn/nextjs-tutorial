import Head from 'next/head';
import { Heading } from '@/components/heading';
import { User } from '@/typedef';
import { GetStaticProps } from 'next';

type Props = {
	contacts: User[];
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data: User[] = await response.json();

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { contacts: data },
	};
};

const Contacts = ({ contacts }: Props) => {
	return (
		<>
			<Head>
				<title>Contact</title>
			</Head>
			<Heading text='Contacts list:' />
			<ul>
				{contacts.map(({ id, email, name }) => (
					<li key={id}>
						<strong>{name}</strong> ({email})
					</li>
				))}
			</ul>
		</>
	);
};

export default Contacts;
