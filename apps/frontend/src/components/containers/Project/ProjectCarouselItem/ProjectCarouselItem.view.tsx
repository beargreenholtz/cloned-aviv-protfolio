import React from 'react';
import Image from 'next/image';

import classes from './ProjectCarouselItem.module.scss';

interface IProps {
	readonly index: number;
	readonly image: string;
}

const ProjectCarouselItemView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']} key={props.index}>
			<Image
				key={props.index}
				src={props.image}
				className={classes['container__img']}
				alt="test"
				width={100}
				height={100}
			/>
		</div>
	);
};

ProjectCarouselItemView.displayName = 'ProjectCarouselItemView';
ProjectCarouselItemView.defaultProps = {};

export default React.memo(ProjectCarouselItemView);
