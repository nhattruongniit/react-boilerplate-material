import React, { Fragment, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// configs
import { PATH_NAME } from 'configs';

// types
import { IRoutes } from 'models/IRoutes';

// layouts
import Dashboard from 'layouts/Dashboard';

// containers
import AuthGuard from 'guards/AuthGuard';
import GuestGuard from 'guards/GuestGuard';

// modules
const Error404View = lazy(() => import('features/Error404View'));
const SongAdd = lazy(() => import('features/Song/SongAdd'));
const SongList = lazy(() => import('features/Song/SongList'));
const Artist = lazy(() => import('features/Artist'));
const NoteBot = lazy(() => import('features/Tool/NoteBot'));
const AppAdd = lazy(() => import('features/App/AppAdd'));
const AppList = lazy(() => import('features/App/AppList'));
const Users = lazy(() => import('features/Users'));
const LicenseAdd = lazy(() => import('features/License/LicenseAdd'));
const LicenseList = lazy(() => import('features/License/LicenseList'));
const Location = lazy(() => import('features/Location'));
const MassTag = lazy(() => import('features/Mass/MassTag'));
const MassEdit = lazy(() => import('features/Mass/MassEdit'));
const Playbackground = lazy(() => import('features/Playbackground'));
const Login = lazy(() => import('features/Login'));

const routesConfig: IRoutes[] = [
  {
    exact: true,
    path: '/',
    component: () => <Redirect to={PATH_NAME.SONG_LISTS} />,
  },
  {
    exact: true,
    path: PATH_NAME.ERROR_404,
    component: Error404View,
  },
  {
    exact: true,
    guard: GuestGuard,
    path: PATH_NAME.LOGIN,
    component: Login,
  },
  {
    path: '/',
    guard: AuthGuard,
    layout: Dashboard,
    routes: [
      {
        exact: true,
        path: PATH_NAME.PLAY_BACKGROUND,
        component: Playbackground,
      },
      {
        exact: true,
        path: PATH_NAME.SONG_LISTS,
        component: SongList,
      },
      {
        exact: true,
        path: PATH_NAME.SONG_ADD,
        component: SongAdd,
      },
      {
        exact: true,
        path: PATH_NAME.ARTISTS,
        component: Artist,
      },
      {
        exact: true,
        path: PATH_NAME.TOOLS_NOTEBOT,
        component: NoteBot,
      },
      {
        exact: true,
        path: PATH_NAME.APP_ADD,
        component: AppAdd,
      },
      {
        exact: true,
        path: PATH_NAME.APP_LISTS,
        component: AppList,
      },
      {
        exact: true,
        path: PATH_NAME.USERS,
        component: Users,
      },
      {
        exact: true,
        path: PATH_NAME.LICENSES_ADD,
        component: LicenseAdd,
      },
      {
        exact: true,
        path: PATH_NAME.LICENSES_LISTS,
        component: LicenseList,
      },
      {
        exact: true,
        path: PATH_NAME.LOCATION,
        component: Location,
      },
      {
        exact: true,
        path: PATH_NAME.SYSTEM_MASS_TAGGING,
        component: MassTag,
      },
      {
        exact: true,
        path: PATH_NAME.SYSTEM_MASS_EDITING,
        component: MassEdit,
      },
      {
        component: () => <Redirect to={PATH_NAME.ERROR_404} />,
      },
    ],
  },
  {
    path: '*',
    routes: [
      {
        exact: true,
        path: '/app',
        component: Dashboard,
      },
      {
        component: () => <Redirect to={PATH_NAME.ERROR_404} />,
      },
    ],
  },
];

const renderRoutes = (routes: IRoutes[]) => {
  return (
    <>
      {routes ? (
        <Suspense fallback={<div />}>
          <Switch>
            {routes.map((route: IRoutes, idx: number) => {
              const Guard = route.guard || Fragment;
              const Layout = route.layout || Fragment;
              const Component = route.component;

              return (
                <Route
                  key={`routes-${idx}`}
                  path={route.path}
                  exact={route.exact}
                  render={(props: any) => (
                    <Guard>
                      <Layout>{route.routes ? renderRoutes(route.routes) : <Component {...props} />}</Layout>
                    </Guard>
                  )}
                />
              );
            })}
          </Switch>
        </Suspense>
      ) : null}
    </>
  );
};

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;
