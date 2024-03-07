import { useState, useEffect } from 'react';
import ExercisesSubcategoriesItem from './SubItem/ExercisesSubcategoriesItem';
import { SliderContainer, SliderButton } from '../Slider/slider.styled';
import { ContainerSubcategoriesUl } from './SubItem/ExercisesSubcategoriesItem.styled';
export default function ExercisesSubcategoriesList({ categories, selectedCategory }) {
  const filteredCategories = categories.filter(category => category.filter === selectedCategory);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Плавна прокрутка
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setCurrentPage(0);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setCurrentPage(0);
    scrollToTop(); 
  }, [selectedCategory]);

  return (
    <div>
      <ContainerSubcategoriesUl>
        {filteredCategories.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((subcategory, index) => (
          <ExercisesSubcategoriesItem key={index} subcategory={subcategory} />
        ))}
      </ContainerSubcategoriesUl>
      {totalPages > 1 && (
        <SliderContainer>
          <div>
            {Array.from({ length: totalPages }, (_, i) => (
              <SliderButton key={i} active={i === currentPage} onClick={() => setCurrentPage(i)}>
                {i + 1}
              </SliderButton>
            ))}
          </div>
        </SliderContainer>
      )}
    </div>
  );
}