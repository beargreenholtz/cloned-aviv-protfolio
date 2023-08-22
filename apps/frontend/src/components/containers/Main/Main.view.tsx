import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type { IProject } from '../../../interfaces/responses';
import intro from '../../../../public/images/intro.png';
import Carousel from './Carousel';

import classes from './Main.module.scss';

interface IProps {
	readonly projectsList: IProject[];
}

const MainView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<main className={classes['container']}>
			<Image
				className={classes['container__image']}
				width={100}
				height={100}
				quality={100}
				src={intro}
				alt="Intro image"
				priority
			/>
			<div className={classes['bioContainer']}>
				<span className={classes['bioContainer__bio']}>Bio</span>
				<p className={classes['bioContainer__description']}>
					Aviv Shiloh is a photographer focusing on the humane
					<br />
					aspects of social and cultural issues.
				</p>
				<Link className={classes['bioContainer__readMore']} href="/about">
					Read More
				</Link>
				<span className={classes['fadeBackground']} />
			</div>
			{props.projectsList && <Carousel projectsList={props.projectsList} />}
		</main>
	);
};

MainView.displayName = 'MainView';
MainView.defaultProps = {};

export default React.memo(MainView);
