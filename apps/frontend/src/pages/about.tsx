import React from 'react';
import type { NextPage } from 'next';

import Header from '@/layout/Header';
import About from '@/containers/About';
import Transition from '@/layout/Transition';

const AboutPage: NextPage = () => {
	return (
		<Transition>
			<Header theme="dark" float />
			<About />
		</Transition>
	);
};

AboutPage.displayName = 'AboutPage';
AboutPage.defaultProps = {};

export default AboutPage;
