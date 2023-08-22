import type { CSSProperties } from 'react';
import React from 'react';

import type icons from '../../../assets/icons';

import SSvgView from './SSvg.view';

interface IProps {
	readonly name: keyof typeof icons;
	readonly className?: string;
	readonly style?: CSSProperties;
	readonly onClick?: () => void;
}

const SSvg: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<SSvgView style={props.style} className={props.className} name={props.name} onClick={props.onClick} />
	);
};

SSvg.displayName = 'SSvg';
SSvg.defaultProps = {};

export default React.memo(SSvg);
