import Head from 'next/head';
import { ContactInfo } from '@/components/contact-info';
import { User } from '@/typedef';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

type Props = {
	contact: User;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
	context: GetServerSidePropsContext
) => {
	const { id } = context.params || {};

	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${id}`
	);
	const data: User = await response.json();

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { contact: data },
	};
};

const Contact = ({ contact }: Props) => {
	return (
		<>
			<Head>
				<title>Contact</title>
			</Head>
			<ContactInfo contact={contact} />
		</>
	);
};

export default Contact;
