import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout/AppLayout.jsx';
import { Suspense, lazy, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { refreshUser } from './redux/auth/api.js';
import { RestrictedRoute } from './components/Routes/RestrictedRoute.jsx';
import { PrivateRoute } from './components/Routes/PrivateRoute.jsx';
import { Loader } from './components/parts/Loader/Loader.jsx';
import {useAuth} from "./components/hooks/index.js";
import {selectIsLoggedin} from "./redux/auth/selectors.js";
import { Toaster } from 'react-hot-toast';


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
  const user = useSelector(selectIsLoggedin)
  const { isRefreshing } = useAuth();

  useEffect(() => {
      dispatch(refreshUser());

  }, [dispatch]);
  return (
    isRefreshing ? <Loader /> : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<RestrictedRoute component={<WelcomePage />} redirectTo="/diary" />} />
          <Route path="signin" element={<RestrictedRoute component={<SigninPage />} redirectTo="/diary" />} />
          <Route path="signup" element={<RestrictedRoute component={<SignupPage />} redirectTo="/profile" />} />
          <Route path="profile" element={<PrivateRoute component={<ProfilePage/>} redirectTo = "/"/>} />
          <Route path="diary" element={<PrivateRoute component={<DiaryPage/>} redirectTo = "/"/>} />
          <Route path="exercises" element={<PrivateRoute component={<ExercisesPage/>} redirectTo = "/"/>} />
          <Route path="products" element={<PrivateRoute component={<ProductsPage/>} redirectTo = "/"/>} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Toaster position='top-right'/>
    </Suspense>
  ));
}
export default App;