// data/categories.tsx
import { Category } from "../types/category";
import { 
  ShoppingBag,
  Battery,
  Home,
  Pipette,
  Leaf,
  ShoppingCart,
  Gift,
  BookOpen,
  Baby,
  Shirt,
  Palette,
  Dumbbell,
  Camera,
  Music,
  PawPrint
} from 'lucide-react';
import React from "react";

export const categories: Category[] = [
  {
    name: 'fashion',
    icon: <ShoppingBag size={24} strokeWidth={1.5} color="#000000" />
  },
  {
    name: 'electronics',
    icon: <Battery size={24} strokeWidth={1.5} color="#000000" />
  },
  {
    name: 'home & living',
    icon: <Home size={24} strokeWidth={1.5} color="#000000" />
  },
  {
    name: 'beauty',
    icon: <Pipette size={24} strokeWidth={1.5} color="#000000" />
  },
  {
    name: 'food',
    icon: <Leaf size={24} strokeWidth={1.5} color="#000000" />
  },
  {
    name: 'digital products',
    icon: <ShoppingCart size={24} strokeWidth={1.5} color="#000000" />
  },
  {
    name: 'gifts',
    icon: <Gift size={24} strokeWidth={1.5} color="#000000" />
  },
  {
    name: 'books',
    icon: <BookOpen size={24} strokeWidth={1.5} color="#000000" />
  },
  {
    name: 'baby',
    icon: <Baby size={24} strokeWidth={1.5} color="#000000" />
  },
  {
    name: 'clothing',
    icon: <Shirt size={24} strokeWidth={1.5} color="#000000" />
  },
  {
    name: 'art',
    icon: <Palette size={24} strokeWidth={1.5} color="#000000" />
  },
  {
    name: 'fitness',
    icon: <Dumbbell size={24} strokeWidth={1.5} color="#000000" />
  },
  {
    name: 'photography',
    icon: <Camera size={24} strokeWidth={1.5} color="#000000" />
  },
  {
    name: 'music',
    icon: <Music size={24} strokeWidth={1.5} color="#000000" />
  },
  {
    name: 'pets',
    icon: <PawPrint size={24} strokeWidth={1.5} color="#000000" />
  }
];