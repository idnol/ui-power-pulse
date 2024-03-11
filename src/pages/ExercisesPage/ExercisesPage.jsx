import { useState } from 'react';
import useFetchCategories from './ExercisesHelper/useFetchCategories';
import ExercisesCategories from './Categories/ExercisesCategories';
import ExercisesSubcategoriesList from './SubCategories/ExercisesSubcategoriesList';
import { Wrapper, Row } from './ExercisesPage.styled.js';
import { useSelector } from 'react-redux';
import { Exercises } from '../../components/ExercisesPageList/ExercisesPageList.jsx';


export default function ExercisesPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = useFetchCategories(selectedCategory);

  const bodyPartFilter = useSelector((state) => state.filter.exercisesFilter);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section>
      <div className="container">
        <Row>
          <Wrapper>
            <ExercisesCategories onClick={handleCategoryClick} />
            {bodyPartFilter === '' ? (
              <ExercisesSubcategoriesList
                categories={categories}
                selectedCategory={selectedCategory}
              />
            ) : (
              <Exercises bodyPartFilter={bodyPartFilter} />
            )}
          </Wrapper>
        </Row>
      </div>
    </section>
  );
}
