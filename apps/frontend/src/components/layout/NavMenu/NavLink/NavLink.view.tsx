import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { concatClasses } from '@/utils/component';

import classes from './NavLink.module.scss';

interface IProps {
	readonly index: number;
	readonly selectedLinkIndex: number | null;
	readonly title: string;
	readonly url: string;
	readonly randomImage: string | null;
	readonly onHover: (index: number) => void;
	readonly onToggleMenu: () => void;
	readonly onCloseMenu: (linkName: string) => void;
}

const NavLinkView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const isImageVisible = props.index === props.selectedLinkIndex;

	const imageClasses = concatClasses(
		classes,
		'container__image',
		isImageVisible ? 'container__image--visible' : '',
	);

	return (
		<div className={classes['container']}>
			{isImageVisible && (
				<Image
					className={imageClasses}
					src={props.randomImage ?? '/images/placeholder.png'}
					width={257}
					height={144}
					alt="Navigtion Menu"
				/>
			)}
			<Link
				className={classes['container__link']}
				href={props.url}
				onMouseEnter={() => props.onHover(props.index)}
				onMouseLeave={() => props.onHover(-1)}
				onClick={() => props.onCloseMenu(props.title)}
			>
				{props.title}
			</Link>
		</div>
	);
};

NavLinkView.displayName = 'NavLinkView';
NavLinkView.defaultProps = {};

export default React.memo(NavLinkView);
