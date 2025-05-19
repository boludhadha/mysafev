// data/vendors.tsx
import { Vendor } from "../types/vendor";
import { 
  ShoppingBag, 
  Sparkles, 
  PaintBucket, 
  FileDigit,
  Smartphone,
  ShoppingCart,
  Shirt,
  Utensils
} from "lucide-react";
import React from "react";

export const vendors: Vendor[] = [
  { 
    id: 1, 
    name: 'fashion vendor', 
    rating: 4.8, 
    reviews: 43, 
    category: 'fashion',
    icon: <Shirt size={28} strokeWidth={2} color="#262626" />
  },
  { 
    id: 2, 
    name: 'beauty shop', 
    rating: 4.9, 
    reviews: 127, 
    category: 'beauty',
    icon: <Sparkles size={28} strokeWidth={2} color="#262626" />
  },
  { 
    id: 3, 
    name: 'handmade crafts', 
    rating: 4.7, 
    reviews: 38, 
    category: 'handmade',
    icon: <PaintBucket size={28} strokeWidth={2} color="#262626" />
  },
  { 
    id: 4, 
    name: 'digital prints', 
    rating: 4.5, 
    reviews: 65, 
    category: 'digital products',
    icon: <FileDigit size={28} strokeWidth={2} color="#262626" />
  },
  { 
    id: 5, 
    name: 'phone accessories', 
    rating: 4.6, 
    reviews: 92, 
    category: 'electronics',
    icon: <Smartphone size={28} strokeWidth={2} color="#262626" />
  },
  { 
    id: 6, 
    name: 'vintage collectibles', 
    rating: 4.9, 
    reviews: 51, 
    category: 'handmade',
    icon: <ShoppingBag size={28} strokeWidth={2} color="#262626" />
  },
  { 
    id: 7, 
    name: 'gourmet foods', 
    rating: 4.8, 
    reviews: 76, 
    category: 'food',
    icon: <Utensils size={28} strokeWidth={2} color="#262626" />
  },
  { 
    id: 8, 
    name: 'trendy marketplace', 
    rating: 4.4, 
    reviews: 113, 
    category: 'fashion',
    icon: <ShoppingCart size={28} strokeWidth={2} color="#262626" />
  }
];