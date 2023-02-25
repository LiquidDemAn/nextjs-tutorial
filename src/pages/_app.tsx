import '@/styles/globals.scss';
import { Layout } from '@/components/layout';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<main>
				<Component {...pageProps} />
			</main>
		</Layout>
	);
};

export default App;
