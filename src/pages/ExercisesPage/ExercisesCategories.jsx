import { NavLink } from 'react-router-dom';

export default function ExercisesCategories() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/exercises/bodyparts" activeClassName="active">Body parts</NavLink>
        </li>
        <li>
          <NavLink to="/exercises/muscles" activeClassName="active">Muscles</NavLink>
        </li>
        <li>
          <NavLink to="/exercises/equipment" activeClassName="active">Equipment</NavLink>
        </li>
      </ul>
    </div>
  );
}