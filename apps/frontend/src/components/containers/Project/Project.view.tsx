import React from 'react';
import Image from 'next/image';

import type { IProject } from 'src/interfaces/responses';
import { imageUrl } from '@/utils/image-url';

import SSvg from '@/ui/SSvg';
import classes from './Project.module.scss';
import ProjectCarousel from './ProjectCarousel';

interface IProps {
	readonly projectInfo: IProject | undefined;
	readonly onNavigateBack: () => void;
}

const ProjectView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const projectName = props.projectInfo?.attributes.name;
	const projectDate = props.projectInfo?.attributes.date.split('-')[0] ?? '';
	const projectCity = props.projectInfo?.attributes.city;
	const projectCountry = props.projectInfo?.attributes.country;
	const projectDescription = props.projectInfo?.attributes.description;

	return (
		<section className={classes['container']}>
			<div className={classes['infoContainer']}>
				<div className={classes['backButtonContainer']}>
					<SSvg className={classes['backButtonContainer__icon']} name="arrowLeft" />
					<button
						className={classes['backButtonContainer__text']}
						type="button"
						onClick={props.onNavigateBack}
					>
						BACK
					</button>
				</div>
				<h2 className={classes['infoContainer__name']}>{projectName}</h2>
				<span className={classes['infoContainer__date']}>{projectDate}</span>
				<div className={classes['locationContainer']}>
					<span className={classes['locationContainer__text']}>{`${projectCity},`}</span>
					<span className={classes['locationContainer__text']}>{projectCountry}</span>
				</div>
				<p className={classes['infoContainer__description']}>{projectDescription}</p>
				<div className={classes['scrollContainer']}>
					<span className={classes['scrollContainer__text']}>Scroll</span>
					<SSvg className={classes['scrollContainer__icon']} name="arrow" />
				</div>
			</div>
			<div className={classes['imageSlideContainer']}>
				<div className={classes['imageSlideContainer']}>
					<ProjectCarousel imagesList={props.projectInfo?.attributes?.media?.data ?? []} />
				</div>
				{props.projectInfo?.attributes?.media?.data.map((image, i) => {
					const imageSrc = imageUrl(image.attributes.url);

					return (
						<div key={i} className={classes['imageContainer']}>
							<Image
								className={classes['imageContainer__image']}
								src={imageSrc}
								alt={image.attributes.caption}
								width={1}
								height={1}
							/>
							<span className={classes['imageContainer__caption']}>
								{image.attributes.caption}
							</span>
						</div>
					);
				})}
			</div>
		</section>
	);
};

ProjectView.displayName = 'ProjectView';
ProjectView.defaultProps = {};

export default React.memo(ProjectView);
