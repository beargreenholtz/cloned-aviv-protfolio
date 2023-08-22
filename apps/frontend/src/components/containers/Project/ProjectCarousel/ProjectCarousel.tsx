import React, { useState } from 'react';

import type { IImage } from 'src/interfaces/image';
import ProjectCarouselView from './ProjectCarousel.view';

interface IProps {
	readonly imagesList: IImage[];
}

const ProjectCarousel: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [selectedItemIndexState, setSelectedItemIndexState] = useState<number>(0);

	const setSelectedItemIndex = (index: number) => setSelectedItemIndexState(() => index);

	return (
		<ProjectCarouselView
			imagesList={props.imagesList}
			selectedItemIndex={selectedItemIndexState}
			setSelectedItemIndex={setSelectedItemIndex}
		/>
	);
};

ProjectCarousel.displayName = 'ProjectCarousel';
ProjectCarousel.defaultProps = {};

export default React.memo(ProjectCarousel);
