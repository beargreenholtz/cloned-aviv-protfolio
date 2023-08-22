import React from 'react';

import type { IImage } from 'src/interfaces/image';
import { imageUrl } from '@/utils/image-url';
import ProjectCarouselItemView from './ProjectCarouselItem.view';

interface IProps {
	readonly index: number;
	readonly image: IImage;
}

const ProjectCarouselItem: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const imageSrc = imageUrl(props.image.attributes.url);

	return <ProjectCarouselItemView index={props.index} image={imageSrc} />;
};

ProjectCarouselItem.displayName = 'ProjectCarouselItem';
ProjectCarouselItem.defaultProps = {};

export default React.memo(ProjectCarouselItem);
