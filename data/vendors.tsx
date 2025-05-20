// data/vendors.tsx - With more varied content
import { Vendor } from "../types/vendor";
import { 
  ShoppingBag,
  Battery,
  Home,
  Pipette,
  Leaf,
  ShoppingCart
} from 'lucide-react';
import React from "react";

export const vendors: Vendor[] = [
  { 
    id: 1, 
    name: 'Artemis Fashion ', // Longer name
    rating: 4.8, 
    reviews: 4375, 
    category: 'fashion',
    icon: <ShoppingBag size={24} strokeWidth={1.5} color="#000000" />,
    website: 'artemisfashion.com',
    logo: '/api/placeholder/200/200', 
    description: 'Trendy women\'s fashion with ethical manufacturing practices. Specializing in casual wear and accessories.'
  },
  { 
    id: 2, 
    name: 'TechGalaxy', // Shorter name
    rating: 4.6, 
    reviews: 3892, 
    category: 'electronics',
    icon: <Battery size={24} strokeWidth={1.5} color="#000000" />,
    website: 'techgalaxy.store',
    logo: '/api/placeholder/200/200',
    description: 'Premium electronics and accessories from trusted brands. Fast shipping and reliable customer service.'
  },
  { 
    id: 3, 
    name: 'HomeHaven Interior', // Very long name
    rating: 4.9, 
    reviews: 5629, 
    category: 'home & living',
    icon: <Home size={24} strokeWidth={1.5} color="#000000" />,
    website: 'homehaven.co',
    logo: '/api/placeholder/200/200',
    description: 'Curated home decor and furniture selections. Create your perfect living space with our stylish designs.'
  },
  { 
    id: 4, 
    name: 'Glow Cosmetics', 
    rating: 4.7, 
    reviews: 2184, 
    category: 'beauty',
    icon: <Pipette size={24} strokeWidth={1.5} color="#000000" />,
    website: 'glowcosmetics.beauty',
    logo: '/api/placeholder/200/200',
    description: 'Cruelty-free makeup and skincare products. Made with natural ingredients for a radiant look.'
  },
  { 
    id: 5, 
    name: 'Organic Basket', 
    rating: 4.5, 
    reviews: 1847, 
    category: 'food',
    icon: <Leaf size={24} strokeWidth={1.5} color="#000000" />,
    website: 'organicbasket.com',
    logo: '/api/placeholder/200/200',
    description: 'Farm-fresh organic produce delivered to your door. Supporting local farmers with sustainable practices.'
  },
  { 
    id: 6, 
    name: 'Digital Creations', 
    rating: 4.8, 
    reviews: 976, 
    category: 'digital products',
    icon: <ShoppingCart size={24} strokeWidth={1.5} color="#000000" />,
    website: 'digitalcreations.io',
    logo: '/api/placeholder/200/200',
    description: 'Premium digital assets for your creative projects. Fonts, templates, graphics, and more.'
  },
  { 
    id: 7, 
    name: 'Luxe Watches & Accessories', 
    rating: 4.9, 
    reviews: 3456, 
    category: 'fashion',
    icon: <ShoppingBag size={24} strokeWidth={1.5} color="#000000" />,
    website: 'luxewatches.com',
    logo: '/api/placeholder/200/200',
    description: 'Authentic luxury watches at competitive prices. Full warranty and expert authentication.'
  },
  { 
    id: 8, 
    name: 'Fitness Pro', 
    rating: 4.7, 
    reviews: 11213, 
    category: 'fitness',
    icon: <ShoppingBag size={24} strokeWidth={1.5} color="#000000" />,
    website: 'fitnesspro.fit',
    logo: '/api/placeholder/200/200',
    description: 'Professional fitness equipment and supplements. Transform your home gym with our premium products.'
  }
];