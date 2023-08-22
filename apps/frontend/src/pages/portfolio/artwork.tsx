import React from 'react';
import type { NextPage } from 'next';

import Header from '@/layout/Header';
import Artwork from '@/containers/Portfolio/Artwork';

const artworkPage: NextPage = () => {
	return (
		<>
			<Header theme="dark" float />
			<Artwork />
		</>
	);
};

artworkPage.displayName = 'artworkPage';
artworkPage.defaultProps = {};

export default artworkPage;
