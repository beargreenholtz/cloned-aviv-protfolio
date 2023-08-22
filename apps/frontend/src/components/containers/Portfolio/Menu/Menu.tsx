import React, { useEffect, useState } from 'react';

import MenuView from './Menu.view';

interface IProps {
	readonly isMenuOpen: boolean;
	readonly lastLocation: string;
	readonly onToggleMenu: () => void;
}

const Menu: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isMenuOpenState, setIsMenuOpenState] = useState(false);

	const onToggleMenu = () => {
		setIsMenuOpenState((prev) => !prev);
		props.onToggleMenu();
	};

	useEffect(() => {
		setIsMenuOpenState(() => props.isMenuOpen);
	}, [props.isMenuOpen]);

	return (
		<MenuView
			isMenuOpen={isMenuOpenState}
			lastLocation={props.lastLocation}
			onToggleMenu={onToggleMenu}
		/>
	);
};

Menu.displayName = 'Menu';
Menu.defaultProps = {};

export default React.memo(Menu);
