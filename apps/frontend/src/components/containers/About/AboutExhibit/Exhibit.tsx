import React from 'react';

import ExhibitView from './Exhibit.view';

interface IProps {
	readonly title: string;
	readonly location: string;
	readonly link: string;
	readonly startDate: Date;
	readonly endDate?: Date;
}

const Exhibit: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<ExhibitView
			title={props.title}
			location={props.location}
			link={props.link}
			startDate={props.startDate}
			endDate={props.endDate}
		/>
	);
};

Exhibit.displayName = 'Exhibit';
Exhibit.defaultProps = {};

export default React.memo(Exhibit);
