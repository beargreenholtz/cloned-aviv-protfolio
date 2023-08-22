import React from 'react';
import type { NextPage } from 'next';

import Header from '@/layout/Header';
import Main from '@/containers/Main';
import Transition from '@/layout/Transition';

const MainPage: NextPage = () => {
	return (
		<Transition>
			<Header theme="light" float />
			<Main />
		</Transition>
	);
};

MainPage.displayName = 'MainPage';
MainPage.defaultProps = {};

export default MainPage;
