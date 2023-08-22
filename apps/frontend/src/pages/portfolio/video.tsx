import React from 'react';
import type { NextPage } from 'next';

import Header from '@/layout/Header';
import Video from '@/containers/Portfolio/Video';

const videoPage: NextPage = () => {
	return (
		<>
			<Header theme="dark" float />
			<Video />
		</>
	);
};

videoPage.displayName = 'videoPage';
videoPage.defaultProps = {};

export default videoPage;
