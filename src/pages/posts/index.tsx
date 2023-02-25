import { Heading } from '@/components/heading';
import { PostType } from '@/typedef';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';

type Props = {
	posts: PostType[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data: PostType[] = await response.json();

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { posts: data },
	};
};

const Posts = ({ posts }: Props) => {
	return (
		<>
			<Head>
				<title>Posts</title>
			</Head>
			<Heading text='Posts list:' />
			<ul>
				{posts.map(({ id, title }) => (
					<li key={id}>
						<Link href={`/posts/${id}`}>{title}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default Posts;
