import React from 'react';
import type { NextPage } from 'next';

import Project from '@/containers/Project';

const ProjectPage: NextPage = () => {
	return <Project />;
};

ProjectPage.displayName = 'ProjectPage';
ProjectPage.defaultProps = {};

export default ProjectPage;
