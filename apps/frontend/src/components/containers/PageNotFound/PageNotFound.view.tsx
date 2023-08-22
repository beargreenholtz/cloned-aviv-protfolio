import React from 'react';

import classes from './PageNotFound.module.scss';

interface IProps {}

const PageNotFoundView: React.FC<IProps> = () => {

	return (
		<section className={classes['container']}>
			<span>page not found</span>
		</section>
	);
};

PageNotFoundView.displayName = 'PageNotFoundView';
PageNotFoundView.defaultProps = {};

export default React.memo(PageNotFoundView);
