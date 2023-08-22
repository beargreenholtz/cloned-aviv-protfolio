import React from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';

import type { IImage } from 'src/interfaces/image';
import { imageUrl } from '@/utils/image-url';

import classes from './VModal.module.scss';

interface IProps {
	readonly image: IImage | null;
	readonly isVideo?: boolean;
	readonly onCloseModal: () => void;
}

const VModalView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['backdrop']} onClick={props.onCloseModal}>
			{props.isVideo ? (
				<ReactPlayer
					className={classes['modal']}
					url={props.image ? imageUrl(props.image.attributes.url) : 'public/images/placeholder.png'}
					width="80%"
					height="80%"
					controls
					loop
					disablePictureInPicture
					preload="auto"
					playsinline
					onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
					onClick={(e: React.MouseEvent) => e.stopPropagation()}
				/>
			) : (
				<Image
					className={classes['modal']}
					width={100}
					height={100}
					src={props.image ? imageUrl(props.image.attributes.url) : 'public/images/placeholder.png'}
					alt={props.image ? props.image.attributes.caption : 'Project Image'}
					onClick={(e: React.MouseEvent) => e.stopPropagation()}
				/>
			)}
		</div>
	);
};

VModalView.displayName = 'VModalView';
VModalView.defaultProps = {};

export default React.memo(VModalView);
