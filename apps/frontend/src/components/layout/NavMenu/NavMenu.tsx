import React, { useEffect, useState } from 'react';
import type { AxiosResponse } from 'axios';

import type { IProject } from 'src/interfaces/responses';
import type { ICarouselImage } from 'src/interfaces/carousel-image';
import { backendApi } from '@/utils/http';

import { imageUrl } from '@/utils/image-url';
import NavMenuView from './NavMenu.view';

interface IProps {
	readonly isMenuVisible: boolean;
	readonly onToggleMenu: () => void;
	readonly onCloseMenu: (linkName: string) => void;
}

const NavMenu: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [projectsListState, setProjectsListState] = useState<IProject[]>([]);
	const randomIndex = Math.floor(Math.random() * projectsListState.length);
	const [selectedImageIndexState, setSelectedImageIndexState] = useState<number>(randomIndex);
	const [selectedLinkIndexState, setSelectedLinkIndexState] = useState<number | null>(null);
	const [randomImageState, setRandomImageState] = useState<ICarouselImage | null>(null);

	const onLinkHover = (index: number) => {
		if (index !== -1) {
			setSelectedLinkIndexState(() => index);
			setSelectedImageIndexState((prev) => (prev === projectsListState.length - 1 ? 0 : prev + 1));
			setRandomImageState(() => {
				const randomImage =
					projectsListState[selectedImageIndexState]?.attributes.media.data[0]?.attributes;

				const date = projectsListState[selectedImageIndexState]?.attributes.date.split('-')[0] ?? '';

				const name =
					projectsListState[selectedImageIndexState]?.attributes.media.data[0]?.attributes
						.caption ?? '';

				return {
					url: imageUrl(randomImage?.url ?? ''),
					date: date,
					name: name,
				};
			});
		} else {
			setSelectedLinkIndexState(null);
		}
	};

	useEffect(() => {
		backendApi
			.get(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects?fields[0]=name&fields[1]=description&&fields[3]=date&&fields[4]=country&fields[5]=city&populate[0]=media`,
			)
			.then((response: AxiosResponse) => {
				setProjectsListState(() => response.data.data);
			});
	}, [backendApi]);

	return (
		<NavMenuView
			isMenuVisible={props.isMenuVisible}
			selectedLinkIndex={selectedLinkIndexState}
			randomImage={randomImageState}
			onLinkHover={onLinkHover}
			onToggleMenu={props.onToggleMenu}
			onCloseMenu={props.onCloseMenu}
		/>
	);
};

NavMenu.displayName = 'NavMenu';
NavMenu.defaultProps = {};

export default React.memo(NavMenu);
