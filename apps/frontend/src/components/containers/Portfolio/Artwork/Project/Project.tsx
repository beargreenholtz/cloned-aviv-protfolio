import React from 'react';

import type { IProject } from 'src/interfaces/responses';
import ProjectView from './Project.view';

interface IProps {
	readonly index: number;
	readonly project: IProject;
}

const Project: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <ProjectView index={props.index} project={props.project} />;
};

Project.displayName = 'Project';
Project.defaultProps = {};

export default React.memo(Project);
