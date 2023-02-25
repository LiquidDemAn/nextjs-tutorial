import { UserType } from '@/typedef';
import { Heading } from '../heading';

type Props = {
	contact?: UserType;
};

export const ContactInfo = ({ contact }: Props) => {
	const { name, email, address } = contact || {};
	const { street, suite, city, zipcode } = address || {};

	if (!contact) {
		return <Heading tag='h3' text='Empty contact' />;
	}

	return (
		<>
			<Heading tag='h3' text={name} />
			<div>
				<strong>Email:</strong>
				{email}
			</div>
			<div>
				<strong>Address:</strong>
				{`${street}, ${suite}, ${city}, ${zipcode}`}
			</div>
		</>
	);
};
