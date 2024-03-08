import { useState, useEffect } from 'react';
import ExercisesSubcategoriesItem from './SubItem/ExercisesSubcategoriesItem';
import { SliderContainer, SliderButton } from '../Slider/slider.styled';
import { ContainerSubcategoriesUl } from './SubItem/ExercisesSubcategoriesItem.styled';

export default function ExercisesSubcategoriesList({ categories, selectedCategory }) {
  const filteredCategories = categories.filter(category => category.filter === selectedCategory);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const tabletWidth = 768; 
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= tabletWidth && window.innerWidth <= 1439) {
        setItemsPerPage(9); 
      } else {
        setItemsPerPage(10); 
      }
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

  const handleSliderButtonClick = (page) => {
    setCurrentPage(page);
    scrollToTop();
  };

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
              <SliderButton
                key={i}
                active={i === currentPage}
                onClick={() => handleSliderButtonClick(i)}
              >
                {""}
              </SliderButton>
            ))}
          </div>
        </SliderContainer>
      )}
    </div>
  );
}