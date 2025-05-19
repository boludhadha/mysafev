import React from 'react';
import Link from 'next/link';
import { Category } from '../../types/category';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      href={`/category/${category.name}`} 
      className="flex flex-col items-center shrink-0"
    >
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition mb-3 border border-gray-100">
        {category.icon}
      </div>
      <span className="text-xs lowercase text-center whitespace-nowrap font-medium">{category.name}</span>
    </Link>
  );
};

export default CategoryCard;