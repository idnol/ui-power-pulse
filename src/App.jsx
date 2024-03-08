import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout/AppLayout.jsx';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/api.js';
import { RestrictedRoute } from './components/Routes/RestrictedRoute.jsx';
import { PrivateRoute } from './components/Routes/PrivateRoute.jsx';
import { selectProfileItems } from './redux/profile/profileSelectors.js';
// import {useAuth} from "./components/hooks/index.js";

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage.jsx'));
const SigninPage = lazy(() => import('./pages/SigninPage/SigninPage.jsx'));
const SignupPage = lazy(() => import('./pages/SignupPage/SignupPage.jsx'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage.jsx'));
const DiaryPage = lazy(() => import('./pages/DiaryPage/DiaryPage.jsx'));
const ExercisesPage = lazy(() =>
  import('./pages/ExercisesPage/ExercisesPage.jsx')
);
const ProductsPage = lazy(() =>
  import('./pages/ProductsPage/ProductsPage.jsx')
);
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage.jsx'));

function App() {
  const dispatch = useDispatch();
  const isProfile = useSelector(selectProfileItems);
  const redirectUser = isProfile.length ? "/diary" : "/profile";
  // const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<RestrictedRoute component={<WelcomePage />} redirectTo={redirectUser} />} />
          <Route path="signin" element={<RestrictedRoute component={<SigninPage />} redirectTo={redirectUser} />} />
          <Route path="signup" element={<RestrictedRoute component={<SignupPage />} redirectTo="/profile" />} />
          <Route path="profile" element={<PrivateRoute component={<ProfilePage/>} redirectTo = "/signin"/>} />
          <Route path="diary" element={<PrivateRoute component={<DiaryPage/>} redirectTo = "/signin"/>} />
          <Route path="exercises/" element={<PrivateRoute component={<ExercisesPage/>} redirectTo = "/signin"/>} >
          </Route>
          <Route path="products" element={<PrivateRoute component={<ProductsPage/>} redirectTo = "/signin"/>} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
export default App;
