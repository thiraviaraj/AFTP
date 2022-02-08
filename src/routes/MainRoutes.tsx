import { lazy } from 'react';

// project imports
import {Header} from '../layout/MainLayout';
import Loadable from '../ui-components/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../views/Counter')));
const StartPage = Loadable(lazy(() => import('../views/StartPage')));
const CloudOverview = Loadable(lazy(() => import('../views/CloudOverview')));
const DataStructure = Loadable(lazy(() => import('../views/DataStructure')));
const DesignPattern = Loadable(lazy(() => import('../views/DesignPattern')));
const FinalAssessment = Loadable(lazy(() => import('../views/FinalAssessment')));
const ProjectEssentials = Loadable(lazy(() => import('../views/ProjectEssentials')));
const SoftSkills = Loadable(lazy(() => import('../views/SoftSkills')));
const TimelinePage = Loadable(lazy(() => import('../views/Timeline')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <Header />,
    children: [
        {
            path: '/startpage',
            element: <StartPage />
        },
        {
            path: '/CloudOverview',
            element: <CloudOverview />
        },
        {
            path: '/dashboard',
            element: <DashboardDefault />
        },
        {
            path: '/DataStructure',
            element: <DataStructure />
        },
        {
            path: '/DesignPattern',
            element: <DesignPattern />
        },
        {
            path: '/FinalAssessment',
            element: <FinalAssessment />
        },
        {
            path: '/ProjectEssentials',
            element: <ProjectEssentials />
        },
        {
            path: '/SoftSkills',
            element: <SoftSkills />
        },
        {
            path: '/TimelinePage',
            element: <TimelinePage />
        },
        {
            path: '*',
            element: <h1>Not Found</h1>
        }
    ]
};

export default MainRoutes;