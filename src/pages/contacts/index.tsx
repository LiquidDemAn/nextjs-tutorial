import Head from 'next/head';
import Link from 'next/link';
import { Heading } from '@/components/heading';
import { UserType } from '@/typedef';
import { GetStaticProps } from 'next';

type Props = {
	contacts: UserType[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data: UserType[] = await response.json();

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
				{contacts.map(({ id, name }) => (
					<li key={id}>
						<Link href={`/contacts/${id}`}>{name}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default Contacts;
