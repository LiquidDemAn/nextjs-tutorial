import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { Heading } from '@/components/heading';
import { GetStaticProps } from 'next';
import { SocialType } from '@/typedef';
import { Socials } from '@/components/socials';

type Props = {
	socials: SocialType[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	try {
		const response = await fetch(`${process.env.API_HOST}api/socials`);
		const data: SocialType[] = await response.json();

		if (!data) {
			return {
				notFound: true,
			};
		}

		return {
			props: { socials: data },
		};
	} catch (error) {
		console.log(error);
		return {
			props: { socials: [] },
		};
	}
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
