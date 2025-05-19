import Link from 'next/link';
import { PenSquare, User } from 'lucide-react';

export default function NavBar() {
return (
  <div className="w-full px-4 sm:px-6 md:px-8">
    <div className="max-w-7xl mx-auto">
      <nav className="h-14 w-full rounded-xl bg-white border-b border-gray-200 px-4">
        <div className="flex justify-between items-center h-full">
          <Link href="/" className="text-xl font-bold lowercase flex items-center">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">mysafevendors</span>
          </Link>
          <div className='flex items-center gap-x-6'>
            <Link href="/write-review" className="flex items-center text-sm text-gray-700 hover:text-gray-900">
              <PenSquare size={16} className="mr-1" />
              write review
            </Link>
            <Link href="/account" className="text-gray-700 hover:text-gray-900">
              <User size={20} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  </div>
)};