import React from 'react';
import Image from 'next/image';

import type { IAboutText, IExibhitions } from 'src/interfaces/responses';
import portrait from '../../../../public/images/aviv-portrait.png';

import classes from './About.module.scss';
import AboutExhibit from './AboutExhibit';

interface IProps {
	readonly lastExhibionPosition: number;
	readonly textList: IAboutText | undefined;
	readonly exibhitionsList: IExibhitions[];
	readonly handleScroll: (e: React.UIEvent<HTMLElement>) => void;
}

const AboutView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const style = {
		WebkitMaskImage: `linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) ${
			100 - props.lastExhibionPosition + '%'
		})`,
	};

	return (
		<section className={classes['container']}>
			<Image className={classes['container__image']} src={portrait} alt="Aviv Shiloh" />

			<div className={classes['innerContainer']}>
				<div className={classes['infoContainer']}>
					<h1 className={classes['infoContainer__title']}>{props.textList?.attributes.title}</h1>

					<p className={classes['infoContainer__text']}>{props.textList?.attributes.description}</p>
				</div>
				<hr className={classes['divider']} />
				<div className={classes['exhibitionsContainer']}>
					<h1 className={classes['exhibitionsContainer__title']}>Exhibitions</h1>

					<div className={classes['innerExihitions']} style={style} onScroll={props.handleScroll}>
						{props.exibhitionsList.map((exhibition, key) => {
							const title = exhibition?.attributes.title;
							const location = exhibition?.attributes.location;
							const link = exhibition?.attributes.link;
							const startDate = exhibition?.attributes.startDate;
							const endDate = exhibition?.attributes.endDate;

							return (
								<AboutExhibit
									key={key}
									title={title}
									location={location}
									link={link}
									startDate={startDate}
									endDate={endDate}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

AboutView.displayName = 'AboutView';
AboutView.defaultProps = {};

export default React.memo(AboutView);
