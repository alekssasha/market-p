import { lazy } from 'react';
import { Route, Navigate, Routes, useLocation } from 'react-router-dom';

import { checkPathMatch, paths } from './helpers';

const HomePage = lazy(() => import('pages/HomePage'));


const PublicRoutes: React.FC = () => {
  const location = useLocation();

  const isMatch = checkPathMatch(location.pathname, paths);

  const Logout = () => {
    return <Navigate to={paths.home} />
  }


  return (
    <Routes>
      {/* <Route path={paths.login} element={<LoginPage />} />
      <Route path={paths.register} element={<RegisterPage />} />
      <Route path={paths.logout} element={<Logout />} /> */}

      <Route path={paths.home} element={<HomePage />} />
      {/* <Route path={paths.productDetails} element={<ProductDetailsPage />} />
      <Route path={paths.favorites} element={<FavoritesPage />} /> */}

      <Route path='*' element={!isMatch ? <Navigate to={paths.home} /> : null} />
    </Routes>
  )
}

export default PublicRoutes