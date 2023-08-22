import type { CSSProperties } from 'react';
import React from 'react';

import { concatDiverseClasses } from '../../../utils/component';

import icons from '../../../assets/icons';

import classes from './SSvg.module.scss';

interface IProps {
	readonly name: keyof typeof icons;
	readonly className?: string;
	readonly style?: CSSProperties;
	readonly onClick?: () => void;
}

const SSvgView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const svgClasses = concatDiverseClasses(classes['container'], props.className);

	return (
		<svg
			style={props.style}
			className={svgClasses}
			version="1.1"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox={'0 0 ' + icons[props.name][0]}
			dangerouslySetInnerHTML={{ __html: icons[props.name][1] ?? '' }}
			onClick={props.onClick}
		/>
	);
};

SSvgView.displayName = 'SSvgView';
SSvgView.defaultProps = {};

export default SSvgView;
