import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type { ICarouselImage } from 'src/interfaces/carousel-image';
import { concatClasses } from '@/utils/component';
import SSvg from '@/ui/SSvg';

import { navList } from '../../../data/nav-list';

import NavLink from './NavLink';
import classes from './NavMenu.module.scss';

interface IProps {
	readonly isMenuVisible: boolean;
	readonly selectedLinkIndex: number | null;
	readonly randomImage: ICarouselImage | null;
	readonly onLinkHover: (index: number) => void;
	readonly onToggleMenu: () => void;
	readonly onCloseMenu: (linkName: string) => void;
}

const NavMenuView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const containerClasses = concatClasses(
		classes,
		'container',
		props.isMenuVisible ? '' : 'container--fadeOut',
	);

	return (
		<section className={containerClasses}>
			<div className={classes['headerContainer']}>
				<div className={classes['mobileBurger']}>
					<button
						className={classes['mobileBurger__button']}
						type="button"
						onClick={props.onToggleMenu}
					>
						<SSvg name="humburger" className={classes['mobileBurger__icon']} />
					</button>
				</div>
				<button
					className={classes['headerContainer__menu']}
					type="button"
					onClick={props.onToggleMenu}
				>
					MENU
				</button>
				<Link className={classes['headerContainer__logo']} href="/" onClick={props.onToggleMenu}>
					AVIV SHILOH
				</Link>
				<a
					href="https://api.whatsapp.com/send?phone=972504949449"
					className={classes['headerContainer__text']}
				>
					CONTACT
				</a>
			</div>

			<div className={classes['innerContainer']}>
				<div className={classes['linksContainer']}>
					{navList.map((navItem, index) => (
						<NavLink
							key={navItem.title}
							index={index}
							selectedLinkIndex={props.selectedLinkIndex}
							title={navItem.title}
							url={navItem.url}
							randomImage={props.randomImage?.url ?? '/images/placeholder.png'}
							onHover={props.onLinkHover}
							onToggleMenu={props.onToggleMenu}
							onCloseMenu={props.onCloseMenu}
						/>
					))}
				</div>
				<div className={classes['mobileImageContainer']}>
					<Image
						className={classes['mobileImageContainer__image']}
						src={props.randomImage?.url ?? '/images/placeholder.png'}
						width={326}
						height={184}
						alt={props.randomImage?.name ?? 'Random image'}
					/>
					<span className={classes['mobileImageContainer__name']}>
						{props.randomImage?.name ?? 'Carnival of Venice'}
					</span>

					<span className={classes['mobileImageContainer__date']}>
						{props.randomImage?.date ?? '2023'}
					</span>
				</div>
			</div>
		</section>
	);
};

NavMenuView.displayName = 'NavMenuView';
NavMenuView.defaultProps = {};

export default React.memo(NavMenuView);
