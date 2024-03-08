import { NavLink, Outlet } from 'react-router-dom';
import { Exercises } from '../../components/ExercisesPageList/ExercisesPageList';

export default function ExercisesPage() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="bodyparts">Body parts</NavLink>
        </li>
        <li>
          <NavLink to="muscles">Muscles</NavLink>
        </li>
        <li>
          <NavLink to="equipment">Equipment</NavLink>
        </li>
      </ul>
      <Exercises />
      <Outlet />
    </>
  );
}
