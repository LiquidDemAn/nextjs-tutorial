import React, { useEffect } from 'react';
import styles from '@/styles/404.module.scss';
import { Heading } from '@/components/heading';
import { useRouter } from 'next/router';

const Error = () => {
	const { push } = useRouter();

	useEffect(() => {
		setTimeout(() => {
			push('/');
		}, 3000);
	}, [push]);

	return (
		<div className={styles.wrapper}>
			<Heading text='404' />
			<Heading tag='h2' text='Page Not Found' />
		</div>
	);
};

export default Error;
