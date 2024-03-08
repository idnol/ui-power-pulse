import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchCategories(filter) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/api/exercises/filters?filter=${filter}`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [filter]);

  return categories;
}