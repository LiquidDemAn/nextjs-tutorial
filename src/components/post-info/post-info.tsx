import { PostType } from '@/typedef';
import { Heading } from '../heading';

type Props = {
	post?: PostType;
};

export const PostInfo = ({ post }: Props) => {
	const { title, body } = post || {};

	if (!post) {
		return <Heading tag='h3' text='Empty post' />;
	}

	return (
		<>
			<Heading tag='h3' text={title} />
			<p>{body}</p>
		</>
	);
};
