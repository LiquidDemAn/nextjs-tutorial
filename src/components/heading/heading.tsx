import React from 'react';

type Props = {
	tag?: 'h2' | 'h3';
	text?: string;
};

export const Heading = ({ tag, text }: Props) => {
	const Tag = tag || 'h1';

	return <Tag>{text}</Tag>;
};
