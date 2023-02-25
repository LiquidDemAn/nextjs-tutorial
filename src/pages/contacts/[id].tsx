import Head from 'next/head';
import { ContactInfo } from '@/components/contact-info';
import { User } from '@/typedef';

type Props = {
	contact: User;
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
