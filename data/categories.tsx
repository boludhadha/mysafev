// data/categories.tsx
import { Category } from "../types/category";
import { 
  Shirt, 
  Smartphone, 
  Home, 
  Sparkles, 
  UtensilsCrossed, 
  Package, 
  PaintBucket,
  Globe 
} from "lucide-react";
import React from "react";

export const categories: Category[] = [
  {
    name: 'fashion',
    icon: <Shirt size={28} strokeWidth={2} color="#262626" />
  },
  {
    name: 'electronics',
    icon: <Smartphone size={28} strokeWidth={2} color="#262626" />
  },
  {
    name: 'home & living',
    icon: <Home size={28} strokeWidth={2} color="#262626" />
  },
  {
    name: 'beauty',
    icon: <Sparkles size={28} strokeWidth={2} color="#262626" />
  },
  {
    name: 'food',
    icon: <UtensilsCrossed size={28} strokeWidth={2} color="#262626" />
  },
  {
    name: 'digital products',
    icon: <Package size={28} strokeWidth={2} color="#262626" />
  },
  {
    name: 'handmade',
    icon: <PaintBucket size={28} strokeWidth={2} color="#262626" />
  },
  {
    name: 'global brands',
    icon: <Globe size={28} strokeWidth={2} color="#262626" />
  }
];
