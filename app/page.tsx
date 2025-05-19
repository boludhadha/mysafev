'use client';
import React, { useState } from 'react';
import NavBar from '../components/layout/NavBar';
import Hero from "../components/home/Hero"
import CategorySection from '@/components/home/CategorySection';
import VendorSection from '@/components/home/VendorSection';
import { categories } from '@/data/categories';
import { vendors } from '@/data/vendors'


export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="text-gray-800 bg-gray-100 min-h-screen">
        <NavBar />
       <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CategorySection categories={categories} />
       <VendorSection vendors={vendors} />
    </div>

  )
}