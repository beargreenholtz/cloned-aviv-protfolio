import React, { useEffect, useState } from 'react';
import type { AxiosResponse } from 'axios';

import type { IStillCategory, IStillProject } from 'src/interfaces/responses';
import type { IImage } from 'src/interfaces/image';
import { backendApi } from '@/utils/http';
import StillView from './Still.view';

interface IProps {}

const Still: React.FC<IProps> = () => {
	const [projectsListState, setProjectsListState] = useState<IStillProject[]>([]);
	const [categoriesListState, setCategoriesListState] = useState<IStillCategory[]>([]);
	const [selectedCategoriesState, setSelectedCategoriesState] = useState<IStillCategory[]>([]);
	const [isModalOpenState, setIsModalOpenState] = useState<boolean>(false);
	const [selectedModalImageState, setSelecetedModalImageState] = useState<IImage | null>(null);
	const [isMenuOpenState, setIsMenuOpenState] = useState<boolean>(false);
	const [isMenuVisibleState, setIsMenuVisibleState] = useState<boolean>(false);

	const onSelectCategory = (category: IStillCategory) => {
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
			.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/stills?populate[1]=categories&populate[0]=media`)
			.then((response: AxiosResponse) => {
				setProjectsListState(() => response.data.data);
			});
	}, [backendApi]);

	useEffect(() => {
		backendApi
			.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/still-categories`)
			.then((response: AxiosResponse) => {
				setCategoriesListState(() => response.data.data);
			});
	}, [backendApi]);

	return (
		<StillView
			projectsList={projectsListState}
			categoriesList={categoriesListState}
			selectedCategories={selectedCategoriesState}
			isMenuOpen={isMenuOpenState}
			isMenuVisible={isMenuVisibleState}
			isModalOpen={isModalOpenState}
			selectedModalImage={selectedModalImageState}
			onSelectAllCategoris={onSelectAllCategoris}
			onSelectCategory={onSelectCategory}
			onToggleModal={onToggleModal}
			onToggleMenu={onToggleMenu}
		/>
	);
};

Still.displayName = 'Still';
Still.defaultProps = {};

export default React.memo(Still);
