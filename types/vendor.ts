
// types/vendor.ts
import { ReactNode } from 'react';

export interface Vendor {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  category?: string;
  icon?: ReactNode; // Added icon as an optional property
}