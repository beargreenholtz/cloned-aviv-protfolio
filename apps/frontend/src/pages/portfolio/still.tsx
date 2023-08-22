import React from 'react';
import type { NextPage } from 'next';

import Header from '@/layout/Header';
import Still from '@/containers/Portfolio/Still';

const stillPage: NextPage = () => {
	return (
		<>
			<Header theme="dark" float />
			<Still />
		</>
	);
};

stillPage.displayName = 'stillPage';
stillPage.defaultProps = {};

export default stillPage;
