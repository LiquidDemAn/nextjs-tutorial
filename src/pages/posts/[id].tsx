import Head from 'next/head';
import { PostInfo } from '@/components/post-info';
import { PostType } from '@/typedef';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

type Props = {
	post: PostType;
};

export const getStaticPaths: GetStaticPaths = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data: PostType[] = await response.json();

	const paths = data.map(({ id }) => ({
		params: { id: id.toString() },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<Props> = async (
	context: GetStaticPropsContext
) => {
	const { id } = context.params || {};

	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	);
	const data: PostType = await response.json();

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { post: data },
	};
};

const Post = ({ post }: Props) => {
	return (
		<>
			<Head>
				<title>Post</title>
			</Head>
			<PostInfo post={post} />
		</>
	);
};

export default Post;
