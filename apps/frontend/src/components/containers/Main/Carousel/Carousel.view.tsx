import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
import { imageUrl } from '@/utils/image-url';
import { concatClasses } from '@/utils/component';
import type { IProject } from '../../../../interfaces/responses';

import classes from './Carousel.module.scss';

interface IProps {
	readonly projectsList: IProject[];
	readonly selectedImageIndex: number;
	readonly onNextImageClick: () => void;
	readonly onPreviousImageClick: () => void;
}

const CarouselView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const mobileSecondImageIndex = props.selectedImageIndex === 0 ? 1 : 0;
	const projectId = props.projectsList[props.selectedImageIndex]?.id;

	const projectImage =
		props.projectsList[props.selectedImageIndex]?.attributes?.media?.data[0]?.attributes?.url;

	const projectImageUrl = projectImage ? imageUrl(projectImage) : '/public/images/placeholder.png';
	const projectName = props.projectsList[props.selectedImageIndex]?.attributes?.name;
	const projectDate = props.projectsList[props.selectedImageIndex]?.attributes?.date.split('-')[0] ?? '';

	const secondProjectId = props.projectsList[mobileSecondImageIndex]?.id;

	const secondProjectImage =
		props.projectsList[mobileSecondImageIndex]?.attributes?.media?.data[0]?.attributes?.url;

	const secondProjectImageUrl = secondProjectImage
		? imageUrl(secondProjectImage)
		: '/public/images/placeholder.png';

	const secondProjectName = props.projectsList[mobileSecondImageIndex]?.attributes?.name;

	const secondProjectDate =
		props.projectsList[mobileSecondImageIndex]?.attributes?.date.split('-')[0] ?? '';

	return (
		<section className={classes['container']}>
			<Link className={classes['carouselImage']} href={`/project/${projectId}`}>
				<Image
					className={classes['carouselImage__image']}
					src={projectImageUrl}
					width={1384}
					height={778}
					alt="Carousel Image"
				/>
			</Link>

			<div className={classes['mobileImageInfo']}>
				<span className={classes['mobileImageInfo__title']}>{projectName}</span>
				<span className={classes['mobileImageInfo__date']}>{projectDate}</span>
			</div>

			<Link className={classes['carouselImageMobile']} href={`/project/${secondProjectId}`}>
				<Image
					className={classes['carouselImageMobile__image']}
					src={secondProjectImageUrl}
					width={1384}
					height={778}
					alt="Carousel Image"
				/>
			</Link>

			<div className={concatClasses(classes, 'mobileImageInfo', 'mobileImageInfo--second')}>
				<span className={classes['mobileImageInfo__title']}>{secondProjectName}</span>
				<span className={classes['mobileImageInfo__date']}>{secondProjectDate}</span>
			</div>

			<Link className={classes['mobileMoreWorks']} href="/portfolio/artwork">
				More works
				{' '}
				{'>'}
			</Link>
			<div className={classes['infoContainer']}>
				<div className={classes['leftSide']}>
					<span className={classes['leftSide__title']}>{projectName}</span>
					<span className={classes['leftSide__date']}>{projectDate}</span>
				</div>
				<div className={classes['rightSide']}>
					<button
						className={classes['rightSide__button']}
						type="button"
						onClick={props.onPreviousImageClick}
					>
						Previous Project
					</button>

					<button
						className={classes['rightSide__button']}
						type="button"
						onClick={props.onNextImageClick}
					>
						Next Project
					</button>
				</div>
			</div>
		</section>
	);
};

CarouselView.displayName = 'CarouselView';
CarouselView.defaultProps = {};

export default React.memo(CarouselView);
