// components/ui/CategoryCard.tsx
import React from 'react';
import Link from 'next/link';
import { Category } from '../../types/category';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="flex flex-col items-center shrink-0 w-24">
      <Link href={`/category/${category.name}`} className="w-full">
        <div className="aspect-square w-full bg-white rounded-lg flex items-center justify-center border border-gray-300 mb-2 hover:border-gray-400 transition">
          {category.icon}
        </div>
        <span className="text-xs text-center w-full block whitespace-nowrap font-normal text-gray-800">
          {category.name}
        </span>
      </Link>
    </div>
  );
};

export default CategoryCard;