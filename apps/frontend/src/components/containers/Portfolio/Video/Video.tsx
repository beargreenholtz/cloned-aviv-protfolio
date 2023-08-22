import React, { useEffect, useState } from 'react';
import type { AxiosResponse } from 'axios';
import type { IImage } from 'src/interfaces/image';

import type { IVideoCategory, IVideoProject } from 'src/interfaces/responses';
import { backendApi } from '@/utils/http';
import VideoView from './Video.view';

interface IProps {}

const Video: React.FC<IProps> = () => {
	const [projectsListState, setProjectsListState] = useState<IVideoProject[]>([]);
	const [categoriesListState, setCategoriesListState] = useState<IVideoCategory[]>([]);
	const [selectedCategoriesState, setSelectedCategoriesState] = useState<IVideoCategory[]>([]);
	const [isMenuOpenState, setIsMenuOpenState] = useState<boolean>(false);
	const [isMenuVisibleState, setIsMenuVisibleState] = useState<boolean>(false);
	const [isModalOpenState, setIsModalOpenState] = useState<boolean>(false);
	const [selectedModalImageState, setSelecetedModalImageState] = useState<IImage | null>(null);

	const onSelectCategory = (category: IVideoCategory) => {
		if (selectedCategoriesState.includes(category)) {
			setSelectedCategoriesState((prev) => prev.filter((prevType) => prevType.id !== category.id));
		} else {
			setSelectedCategoriesState((prev) => [...prev, category]);
		}
	};

	const onSelectAllCategoris = () => {
		setSelectedCategoriesState(() => []);
	};

	const onToggleMenu = () => {
		if (isMenuOpenState) {
			setIsMenuVisibleState(() => false);
			setTimeout(() => setIsMenuOpenState(false), 500);
		} else {
			setIsMenuOpenState(() => true);
			setIsMenuVisibleState(() => true);
		}
	};

	const onToggleModal = (image?: IImage) => {
		if (isModalOpenState) {
			setIsModalOpenState(() => false);
		} else {
			setIsModalOpenState(() => true);
			setSelecetedModalImageState(() => image!);
		}
	};

	useEffect(() => {
		backendApi
			.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/videos?populate[1]=categories&populate[0]=media`)
			.then((response: AxiosResponse) => {
				setProjectsListState(() => response.data.data);
			});
	}, [backendApi]);

	useEffect(() => {
		backendApi
			.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/video-categories`)
			.then((response: AxiosResponse) => {
				setCategoriesListState(() => response.data.data);
			});
	}, [backendApi]);

	return (
		<VideoView
			projectsList={projectsListState}
			categoriesList={categoriesListState}
			selectedCategories={selectedCategoriesState}
			isMenuOpen={isMenuOpenState}
			isMenuVisible={isMenuVisibleState}
			isModalOpen={isModalOpenState}
			selectedModalImage={selectedModalImageState}
			onSelectAllCategoris={onSelectAllCategoris}
			onSelectCategory={onSelectCategory}
			onToggleMenu={onToggleMenu}
			onToggleModal={onToggleModal}
		/>
	);
};

Video.displayName = 'Video';
Video.defaultProps = {};

export default React.memo(Video);
