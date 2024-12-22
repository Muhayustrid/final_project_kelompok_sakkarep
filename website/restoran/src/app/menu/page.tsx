import { fetchMenus, fetchCategories } from '@/lib/api';
import Image from 'next/image';

export default async function MenuPage() {
  const menus = await fetchMenus();
  const categories = await fetchCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Daftar Menu</h1>
      
      {categories.map(category => (
        <div key={category.id} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {menus
              .filter(menu => menu.category === category.name)
              .map(menu => (
                <div 
                  key={menu.id} 
                  className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                >
                  {menu.image && (
                    <Image 
                      src={menu.image} 
                      alt={menu.name} 
                      width={300} 
                      height={200} 
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  )}
                  <div className="p-2">
                    <h3 className="text-xl font-bold">{menu.name}</h3>
                    <p className="text-gray-600">{menu.description}</p>
                    <p className="text-lg font-semibold text-green-600">
                      Rp {menu.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      ))}
    </div>
  );
}