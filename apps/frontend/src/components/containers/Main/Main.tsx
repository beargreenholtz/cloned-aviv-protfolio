import React, { useEffect, useState } from 'react';
import type { AxiosResponse } from 'axios';

import type { IProject } from 'src/interfaces/responses';
import { backendApi } from '@/utils/http';

import MainView from './Main.view';

interface IProps {}

const Main: React.FC<IProps> = () => {
	const [projectsListState, setProjectsListState] = useState<IProject[]>([]);

	useEffect(() => {
		backendApi
			.get(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects?fields[0]=name&fields[1]=description&&fields[3]=date&&fields[4]=country&fields[5]=city&populate[0]=media`,
			)
			.then((response: AxiosResponse) => {
				setProjectsListState(() => response.data.data);
			});
	}, [backendApi]);

	return <MainView projectsList={projectsListState} />;
};

Main.displayName = 'Main';
Main.defaultProps = {};

export default React.memo(Main);
