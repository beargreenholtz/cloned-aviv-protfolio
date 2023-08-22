import React, { useState } from 'react';

import type { IProject } from '../../../../interfaces/responses';
import CarouselView from './Carousel.view';

interface IProps {
	readonly projectsList: IProject[];
}

const Carousel: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [selectedImageIndexState, setSelectedImageIndexState] = useState<number>(0);

	const onNextImageClick = () => {
		setSelectedImageIndexState((prev) => {
			if (prev === props.projectsList.length - 1) {
				return 0;
			}

			return prev + 1;
		});
	};

	const onPreviousImageClick = () => {
		setSelectedImageIndexState((prev) => {
			if (prev === 0) {
				return props.projectsList.length - 1;
			}

			return prev - 1;
		});
	};

	return (
		<CarouselView
			projectsList={props.projectsList}
			selectedImageIndex={selectedImageIndexState}
			onNextImageClick={onNextImageClick}
			onPreviousImageClick={onPreviousImageClick}
		/>
	);
};

Carousel.displayName = 'Carousel';
Carousel.defaultProps = {};

export default React.memo(Carousel);
