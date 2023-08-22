import React from 'react';
import type { NextPage } from 'next';

import Contact from '@/containers/Contact';
import Transition from '@/layout/Transition';

const ContactPage: NextPage = () => {
	return (
		<Transition>
			<Contact />
		</Transition>
	);
};

ContactPage.displayName = 'ContactPage';
ContactPage.defaultProps = {};

export default ContactPage;
