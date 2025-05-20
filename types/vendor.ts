// types/vendor.ts
import { ReactNode } from 'react';

export interface Vendor {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  category?: string;
  icon?: ReactNode;
  website?: string;  // Added website URL
  logo?: string;     // Added logo URL
  description?: string;  // Added description
}