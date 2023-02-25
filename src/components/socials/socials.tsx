import styles from '@/styles/socials.module.scss';
import { SocialType } from '@/typedef';

type Props = {
	socials: SocialType[];
};

export const Socials = ({ socials }: Props) => {
	if (!socials) {
		return null;
	}

	return (
		<ul className={styles.socials}>
			{socials &&
				socials.map(({ id, icon, path }) => (
					<li key={id}>
						<a href={path} target='_blank' rel='noopener noreferrer'>
							<i className={`fab fa-${icon}`} aria-hidden='true' />
						</a>
					</li>
				))}
		</ul>
	);
};
