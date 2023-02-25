import Head from 'next/head';
import styles from '@/styles/home.module.scss';
import { Heading } from '@/components/heading';
import { GetStaticProps } from 'next';
import { SocialType } from '@/typedef';
import { Socials } from '@/components/socials';

type Props = {
	socials: SocialType[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const response = await fetch(`${process.env.API_HOST}/socials`);
	const data: SocialType[] = await response.json();

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { socials: data },
	};
};

const Home = ({ socials }: Props) => {
	return (
		<div className={styles.wrapper}>
			<Head>
				<title>Home</title>
			</Head>
			<Heading text='Hello Next.JS' />
			<Socials socials={socials} />
		</div>
	);
};

export default Home;
