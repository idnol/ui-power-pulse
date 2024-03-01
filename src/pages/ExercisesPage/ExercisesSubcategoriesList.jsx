import { useOutletContext, useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import ExercisesSubcategoriesItem from './ExercisesSubcategoriesItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ExercisesSubcategoriesList() {
  const { subcategories } = useOutletContext();
  const history = useHistory();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <button onClick={() => history.goBack()}>Back</button>
      <Slider {...settings}>
        {subcategories.map((subcategory, index) => (
          <ExercisesSubcategoriesItem key={index} subcategory={subcategory} />
        ))}
      </Slider>
    </div>
  );
}