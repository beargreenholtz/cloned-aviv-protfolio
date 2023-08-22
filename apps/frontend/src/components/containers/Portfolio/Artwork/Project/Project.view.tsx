import React from 'react';
import Image from 'next/image';

import type { IProject } from 'src/interfaces/responses';
import Link from 'next/link';
import { imageUrl } from '@/utils/image-url';
import { concatClasses } from '@/utils/component';

import classes from './Project.module.scss';

interface IProps {
	readonly index: number;
	readonly project: IProject;
}

const ProjectView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const projectImage = props.project?.attributes?.media?.data[0]?.attributes?.url;
	const projectImageUrl = projectImage ? imageUrl(projectImage) : '/public/images/placeholder.png';
	const projectName = props.project?.attributes?.name;
	const projectDate = props.project?.attributes?.date.split('-')[0] ?? '';

	const imagesContainerClasses = concatClasses(
		classes,
		'imagesContainer',
		props.index % 2 !== 0 ? 'imagesContainer--reverse' : '',
	);

	const bigImageContainerClasses = concatClasses(
		classes,
		'bigImageContainer',
		props.index % 2 !== 0 ? 'bigImageContainer--reverse' : '',
	);

	const infoContainerClasses = concatClasses(
		classes,
		'infoContainer',
		props.index % 2 !== 0 ? 'infoContainer--reverse' : '',
	);

	return (
		<section className={classes['container']}>
			<div className={imagesContainerClasses}>
				<div className={bigImageContainerClasses}>
					<Link className={classes['bigImageLinkContainer']} href={`/project/${props.project?.id}`}>
						<Image
							className={classes['bigImageLinkContainer__image']}
							src={projectImageUrl}
							alt={projectName}
							width={100}
							height={100}
						/>
					</Link>
				</div>
				<div className={classes['lineImagesContainer']}>
					{props.project?.attributes?.media.data.map((media, index) => {
						if (index < 1 || index > 3) {
							return null;
						}

						const projectImageUrl = projectImage
							? imageUrl(media.attributes.url)
							: '/public/images/placeholder.png';

						return (
							<Link
								key={index}
								href={`/project/${props.project?.id}`}
								className={classes['lineImagesLinkContainer']}
							>
								<Image
									className={classes['lineImagesLinkContainer__image']}
									src={projectImageUrl}
									alt={media.attributes.caption}
									width={100}
									height={100}
								/>
							</Link>
						);
					})}
				</div>
			</div>
			<div className={infoContainerClasses}>
				<span className={classes['infoContainer__name']}>{projectName}</span>
				<div className={classes['locationContainer']}>
					<span className={classes['locationContainer__date']}>{projectDate}</span>
					<span className={classes['locationContainer__country']}>
						{props.project?.attributes?.country}
						{props.project?.attributes?.city && ','}
					</span>
					<span className={classes['locationContainer__city']}>
						{props.project?.attributes?.city}
					</span>
				</div>
			</div>
		</section>
	);
};

ProjectView.displayName = 'ProjectView';
ProjectView.defaultProps = {};

export default React.memo(ProjectView);
