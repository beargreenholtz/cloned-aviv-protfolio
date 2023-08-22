import React from 'react';

import { imageUrl } from '@/utils/image-url';
import GalleryView from './Gallery.view';

interface IProps {
	readonly url: string;
	readonly alt: string;
	readonly className?: string;
	readonly isVideo?: boolean;
	readonly onOpenModal: () => void;
}

const Gallery: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const imageBackendUrl = imageUrl(props.url);

	return (
		<GalleryView
			className={props.className}
			url={imageBackendUrl}
			alt={props.alt}
			isVideo={props.isVideo}
			onOpenModal={props.onOpenModal}
		/>
	);
};

Gallery.displayName = 'Gallery';
Gallery.defaultProps = {};

export default React.memo(Gallery);
