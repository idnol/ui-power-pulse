import { Outlet } from 'react-router-dom';
import ExercisesCategories from './ExercisesCategories';

export default function ExercisesPage({ subcategories }) {
  return (
    <div>
      <h1>Exercises</h1>
      <ExercisesCategories />
      <Outlet context={{ subcategories }} />
    </div>
  );
}