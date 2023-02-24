import React from 'react';
import styles from '@/styles/navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const navigation: { id: number; title: string; path: string }[] = [
	{ id: 1, title: 'Home', path: '/' },
	{ id: 2, title: 'Posts', path: '/posts' },
	{ id: 3, title: 'Contacts', path: '/contacts' },
];

export const Navbar = () => {
	const { pathname } = useRouter();

	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<Image src='/logo.png' width='60' height='60' alt='logo' />
			</div>
			<div className={styles.links}>
				{navigation.map(({ id, path, title }) => (
					<Link
						className={pathname === path ? styles.active : undefined}
						key={id}
						href={path}
					>
						{title}
					</Link>
				))}
			</div>
		</nav>
	);
};
