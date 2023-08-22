import React from 'react';

import { dateForamt } from '@/utils/date-format';
import classes from './Exhibit.module.scss';

interface IProps {
	readonly title: string;
	readonly location: string;
	readonly link: string;
	readonly startDate: Date;
	readonly endDate?: Date;
}

const ExhibitView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const startDate = new Date(props.startDate ? props.startDate : '');
	const endDate = new Date(props.endDate ? props.endDate : '');

	const formattedStartDate = dateForamt(startDate);
	let formattedEndtDate = dateForamt(endDate);

	props.endDate ? (formattedEndtDate = '\b' + '-' + '\b' + formattedEndtDate.toUpperCase()) : '';

	return (
		<div className={classes['container']}>
			<span className={classes['container__title']}>{props.title}</span>
			<a href={props.link} className={classes['container__exhibition']}>
				{props.location}
			</a>
			<div className={classes['dateContainer']}>
				<span className={classes['dateContainer__date']}>{formattedStartDate.toUpperCase()}</span>
				<span className={classes['dateContainer__date']}>{formattedEndtDate}</span>
			</div>
		</div>
	);
};

ExhibitView.displayName = 'ExhibitView';
ExhibitView.defaultProps = {};

export default React.memo(ExhibitView);
