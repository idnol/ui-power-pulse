import { useState } from 'react';
import useFetchCategories from './ExercisesHelper/useFetchCategories';
import ExercisesCategories from './Categories/ExercisesCategories';
import ExercisesSubcategoriesList from './SubCategories/ExercisesSubcategoriesList';

export default function ExercisesPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = useFetchCategories(selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <ExercisesCategories onClick={handleCategoryClick} />
      <ExercisesSubcategoriesList categories={categories} selectedCategory={selectedCategory} />
    </div>
  );
}