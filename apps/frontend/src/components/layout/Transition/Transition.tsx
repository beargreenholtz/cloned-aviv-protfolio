import React from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface IProps {
	readonly children: ReactNode;
}

const Transition = (props: React.PropsWithChildren<IProps>) => (
	<motion.div
		style={{ width: '100%', height: '100%' }}
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		transition={{ duration: 0.6, ease: 'easeInOut' }}
	>
		{props.children}
	</motion.div>
);

Transition.displayName = 'Transition';
Transition.defaultProps = {};

export default Transition;
