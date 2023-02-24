import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { Heading } from '@/components/heading';

const Home = () => {
	return (
		<div className={styles.wrapper}>
			<Head>
				<title>Home</title>
			</Head>
			<Heading text='Hello Next.JS' />
		</div>
	);
};

export default Home;
