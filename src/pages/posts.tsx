import { Heading } from '@/components/heading';
import Head from 'next/head';
import React from 'react';

const Posts = () => {
	return (
		<>
			<Head>
				<title>Posts</title>
			</Head>
			<Heading text='Posts list:' />
		</>
	);
};

export default Posts;
