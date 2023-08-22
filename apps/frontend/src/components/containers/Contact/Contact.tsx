import React, { useEffect, useState } from 'react';

import type { AxiosResponse } from 'axios';
import { backendApi } from '@/utils/http';
import type { IContact } from '@/interfaces/responses';
import ContactView from './Contact.view';

interface IProps {}

const Contact: React.FC<IProps> = () => {
	const [contactDataState, setContactDataState] = useState<IContact | null>(null);

	const onSocialNavigate = (url: string) => {
		window.open(url, '_blank');
	};

	useEffect(() => {
		backendApi
			.get(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact?fields[0]=address&fields[1]=city&fields[2]=country&fields[3]=email&fields[4]=phoneNumber`,
			)
			.then((response: AxiosResponse) => {
				setContactDataState(() => response.data.data);
			});
	}, [backendApi]);

	return <ContactView contactData={contactDataState} onSocialNavigate={onSocialNavigate} />;
};

Contact.displayName = 'Contact';
Contact.defaultProps = {};

export default React.memo(Contact);
