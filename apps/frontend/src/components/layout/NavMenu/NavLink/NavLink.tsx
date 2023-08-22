import React from 'react';

import NavLinkView from './NavLink.view';

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

const NavLink: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<NavLinkView
			index={props.index}
			selectedLinkIndex={props.selectedLinkIndex}
			title={props.title}
			url={props.url}
			randomImage={props.randomImage}
			onHover={props.onHover}
			onToggleMenu={props.onToggleMenu}
			onCloseMenu={props.onCloseMenu}
		/>
	);
};

NavLink.displayName = 'NavLink';
NavLink.defaultProps = {};

export default React.memo(NavLink);
