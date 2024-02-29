import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout/AppLayout.jsx';
import { Suspense, lazy } from 'react';

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
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="diary" element={<DiaryPage />} />
          <Route path="exercises/" element={<ExercisesPage />}>
            <Route path="bodyparts" element={<div>Body parts</div>} />
            <Route path="muscles" element={<div>Muscles</div>} />
            <Route path="equipment" element={<div>Equipment</div>} />
          </Route>
          <Route path="products" element={<ProductsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
export default App;
