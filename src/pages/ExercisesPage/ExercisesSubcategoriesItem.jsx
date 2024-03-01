export default function ExercisesSubcategoriesItem({ subcategory }) {
    return (
      <div style={{ width: '335px', height: '206px' }}>
        <h3>{subcategory.name}</h3>
        <h4>{subcategory.category}</h4>
        <img src={subcategory.image} alt={subcategory.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    );
  }