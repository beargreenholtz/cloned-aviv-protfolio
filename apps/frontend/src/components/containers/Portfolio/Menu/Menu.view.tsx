import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { portfolioNavList } from 'src/data/portfolio-nav-list';
import { concatClasses } from '@/utils/component';

import SSvg from '@/ui/SSvg';
import classes from './Menu.module.scss';

interface IProps {
	readonly isMenuOpen: boolean;
	readonly lastLocation: string;
	readonly onToggleMenu: () => void;
}

const MenuView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const containerClasses = concatClasses(
		classes,
		'container',
		props.isMenuOpen ? 'container--active' : 'container--fadeOut',
	);

	return (
		<section className={containerClasses}>
			<div className={classes['backButtonContainer']}>
				<SSvg
					className={classes['backButtonContainer__icon']}
					name="arrowLeft"
					onClick={props.onToggleMenu}
				/>
				<Link
					className={classes['backButtonContainer__text']}
					href={props.lastLocation}
					onClick={props.onToggleMenu}
				>
					BACK
				</Link>
			</div>
			<div className={classes['linksContainer']}>
				{portfolioNavList.map((element, index) => {
					const linkClasses = concatClasses(
						classes,
						'innerLink__title',
						props.lastLocation === element.url ? 'innerLink__title--active' : '',
					);

					const linkIconClasses = concatClasses(
						classes,
						'innerLink__icon',
						props.lastLocation === element.url.toLowerCase() ? 'innerLink__icon--active' : '',
					);

					return (
						<div key={index} className={classes['innerLink']}>
							<Link
								className={linkClasses}
								href={element.url}
								onClick={props.lastLocation === element.url ? props.onToggleMenu : () => 0}
							>
								{element.title}
							</Link>
							<SSvg
								className={linkIconClasses}
								name="arrowBold"
								onClick={props.lastLocation === element.url ? props.onToggleMenu : () => 0}
							/>
						</div>
					);
				})}
			</div>
			<div className={classes['mobileImageContainer']}>
				<Image
					className={classes['mobileImageContainer__image']}
					src="/images/placeholder.png"
					width={326}
					height={184}
					alt="Carnival of Venice"
				/>
				<span className={classes['mobileImageContainer__name']}>Carnival of Venice</span>

				<span className={classes['mobileImageContainer__date']}>2023</span>
			</div>
		</section>
	);
};

MenuView.displayName = 'MenuView';
MenuView.defaultProps = {};

export default React.memo(MenuView);
