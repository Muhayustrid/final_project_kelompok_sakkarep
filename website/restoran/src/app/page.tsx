import Link from 'next/link';
import { fetchRestaurantProfile } from '@/lib/api';

export default async function Home() {
  const profile = await fetchRestaurantProfile();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{'Restoran Kami'}</h1>
      <p className="text-xl mb-6">{'Selamat datang di restoran kami!'}</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link href="/menu" className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600">
          Lihat Menu
        </Link>
        <Link href="/categories" className="bg-green-500 text-white p-4 rounded hover:bg-green-600">
          Kategori Menu
        </Link>
        <Link href="/profile" className="bg-purple-500 text-white p-4 rounded hover:bg-purple-600">
          Profil Restoran
        </Link>
        <Link href="/faq" className="bg-red-500 text-white p-4 rounded hover:bg-red-600">
          Tanya Jawab
        </Link>
        <Link href="/test" className="bg-red-500 text-white p-4 rounded hover:bg-red-600">
          Tester
        </Link>
      </div>
    </div>
  );
}