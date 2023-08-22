import React from 'react';

import type { IProject } from 'src/interfaces/responses';
import { yearsList } from 'src/data/years-list';
import Transition from '@/layout/Transition';
import SSvg from '@/ui/SSvg';
import { concatClasses } from '@/utils/component';
import Menu from '../Menu';
import type { IYear } from './interfaces/year';
import Project from './Project';

import classes from './Artwork.module.scss';

interface IProps {
	readonly projectsList: IProject[];
	readonly selectedYears: IYear[];
	readonly isMenuOpen: boolean;
	readonly isMenuVisible: boolean;
	readonly onSelectYear: (year: IYear) => void;
	readonly onSelectAllYears: () => void;
	readonly onToggleMenu: () => void;
}

const ArtworkView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<Transition>
			<section className={classes['container']}>
				<div className={classes['headerContainer']}>
					<button
						className={classes['headerContainer__title']}
						type="button"
						onClick={props.onToggleMenu}
					>
						Artworks
					</button>

					<button type="button" onClick={props.onToggleMenu}>
						<SSvg className={classes['headerContainer__icon']} name="arrowBold" />
					</button>
					{props.isMenuOpen && (
						<Menu
							isMenuOpen={props.isMenuVisible}
							lastLocation="/portfolio/artwork"
							onToggleMenu={props.onToggleMenu}
						/>
					)}
				</div>

				<button className={classes['subTitle']} type="button" onClick={props.onToggleMenu}>
					Still, Video
				</button>

				<div className={classes['yearsList']}>
					<button
						className={concatClasses(
							classes,
							'yearsList__item',
							props.selectedYears.length === 0 ? 'yearsList__item--selected' : '',
						)}
						type="button"
						onClick={props.onSelectAllYears}
					>
						All
					</button>
					{yearsList.map((year) => (
						<button
							key={year.year}
							className={concatClasses(
								classes,
								'yearsList__item',
								props.selectedYears.includes(year) ? 'yearsList__item--selected' : '',
							)}
							type="button"
							onClick={() => props.onSelectYear(year)}
						>
							{year.year}
						</button>
					))}
				</div>

				{props.projectsList.map((project, index) => {
					const projectDate = project?.attributes?.date.split('-')[0] ?? '';

					if (
						props.selectedYears.length > 0 &&
						!props.selectedYears.some((year) => year.year === projectDate)
					) {
						return;
					}

					return <Project key={index} index={index} project={project} />;
				})}
			</section>
		</Transition>
	);
};

ArtworkView.displayName = 'ArtworkView';
ArtworkView.defaultProps = {};

export default React.memo(ArtworkView);
