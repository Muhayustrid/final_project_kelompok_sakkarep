import { fetchRestaurantProfile } from '@/lib/api';
import Image from 'next/image';

export default async function MenuPage() {
  const profiles = await fetchRestaurantProfile();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Daftar Profile</h1>
      
      {profiles.map(profile => (
        <div key={profile.id} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{profile.name}</h2>
                <div 
                  className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                >
                  {profile.logo && (
                    <Image 
                      src={profile.logo} 
                      alt={profile.name} 
                      width={300} 
                      height={200} 
                      className="w-40 object-cover rounded-t-lg"
                    />
                  )}
                  <div className="p-2">
                    <p className="text-gray-600">{profile.about_us}</p>
                    <br />
                    <p className="text-gray-600">{profile.address}</p>
                    <p className="text-gray-600">{profile.phone}</p>
                    <p className="text-gray-600">{profile.email}</p>
                    <br />
                    <p className="text-lg font-semibold text-green-600">
                      {profile.facebook}
                    </p>
                    <p className="text-lg font-semibold text-green-600">
                      {profile.instagram}
                    </p>
                    <p className="text-lg font-semibold text-green-600">
                      {profile.twitter}
                    </p>
                  </div>
                </div>
          </div>
      ))}
    </div>
  );
}