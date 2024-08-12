// publicRoutes.tsx
import { RouteObject } from 'react-router-dom';
import PublicContainer from './container';
import { AppLayout } from '../../components/applayout';
import Dashboard from '../../pages/dashboard';

export const PublicRoutes: RouteObject[] = [
    {
        path: '/',
        element: <PublicContainer />,
        children: [
            {
                path: '',
                element: <AppLayout />,
            },
        ],
    },
    {
        path: '/stocks',
        element: <Dashboard />,
    },
];
