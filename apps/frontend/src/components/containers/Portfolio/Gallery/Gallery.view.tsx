import React from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';

import classes from './Gallery.module.scss';

interface IProps {
	readonly url: string;
	readonly alt: string;
	readonly className?: string;
	readonly isVideo?: boolean;
	readonly onOpenModal: () => void;
}

const GalleryView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<button className={props.className} type="button" onClick={props.onOpenModal}>
			{props.isVideo ? (
				<ReactPlayer
					url={props.url}
					width="100%"
					height="100%"
					objectFit="cover"
					autoPlay={false}
					muted
					loop
					disablePictureInPicture
					preload="auto"
					playsinline
					onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
				/>
			) : (
				<Image
					className={classes['container__image']}
					src={props.url}
					alt={props.alt}
					width={100}
					height={100}
				/>
			)}
		</button>
	);
};

GalleryView.displayName = 'GalleryView';
GalleryView.defaultProps = {};

export default React.memo(GalleryView);
