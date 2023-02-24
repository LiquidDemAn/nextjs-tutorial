import Head from 'next/head';
import '@/styles/globals.scss';
import { Layout } from '@/components/layout';
import type { AppProps } from 'next/app';
import Logo from '../../public/logo-2.png';
import Image from 'next/image';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>

			<main>
				<Component {...pageProps} />
			</main>
			<Image src={Logo} width={500} height={350} alt='log' placeholder='blur' />
		</Layout>
	);
};

export default App;
