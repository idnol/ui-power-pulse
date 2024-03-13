import { useState } from 'react';
import useFetchCategories from './ExercisesHelper/useFetchCategories';
import ExercisesCategories from './Categories/ExercisesCategories';
import ExercisesSubcategoriesList from './SubCategories/ExercisesSubcategoriesList';
import {
  Wrapper,
  Row,
  ExercisesSection,
  HeaderInner,
} from './ExercisesPage.styled.js';
import { useSelector } from 'react-redux';
import { Exercises } from '../../components/ExercisesPageList/ExercisesPageList.jsx';

export default function ExercisesPage() {
  const [isBackground, setIsBackground] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = useFetchCategories(selectedCategory);

  const bodyPartFilter = useSelector((state) => state.filter.exercisesFilter);
  const category = useSelector((state) => state.filter.category);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleRenderBackground = () => {
    setIsBackground(true);
  };

  const handleUnRenderBackground = () => {
    setIsBackground(false);
  };

  return (
    <ExercisesSection $isbackground={isBackground}>
      <HeaderInner />
      <div className="container">
        <Row>
          <Wrapper>
            <ExercisesCategories
              onClick={handleCategoryClick}
              onRenderBackground={handleUnRenderBackground}
            />
            {bodyPartFilter === '' ? (
              <ExercisesSubcategoriesList
                categories={categories}
                selectedCategory={selectedCategory}
              />
            ) : (
              <Exercises
                bodyPartFilter={bodyPartFilter}
                category={category}
                onRenderBackground={handleRenderBackground}
              />
            )}
          </Wrapper>
        </Row>
      </div>
    </ExercisesSection>
  );
}
