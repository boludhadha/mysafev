import React from 'react';
import Link from 'next/link';
import { categories } from '@/data/categories';
import Navbar from '../../components/layout/NavBar';

export default function CategoriesPage() {
  return (
    <div className="font-mono text-gray-800 bg-gray-100 min-h-screen">
      <Navbar />
      
      <div className="px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <Link href="/" className="text-sm text-gray-600 flex items-center hover:text-gray-800 transition mb-4">
              <svg width="16" height="16" className="mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              back to home
            </Link>
            
            <h1 className="text-2xl font-bold lowercase">all categories</h1>
            <p className="text-gray-600">Browse all vendor categories</p>
          </div>
          
          <div className="grid grid-cols-2 gap-5">
            {categories.map((category, index) => (
              <Link 
                key={index}
                href={`/category/${category.name}`}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition border border-gray-100 flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-3">
                  {category.icon}
                </div>
                <span className="text-sm font-medium lowercase">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}