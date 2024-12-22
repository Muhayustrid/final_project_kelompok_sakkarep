import "@/styles/globals.css";
import { fetchMenus, fetchRestaurantProfile } from '@/lib/api';
import Image from 'next/image';

export default async function HeroSection() {
  const menus = await fetchMenus();
  const profile = await fetchRestaurantProfile();

  const featuredMenu = menus.length > 0 ? menus[0] : null;
  const restaurantProfile = profile.length > 0 ? profile[0] : null;

  return (
    <section id="hero" className="hero section light-background">
      <div className="container">
        <div className="row gy-4 justify-content-center justify-content-lg-between">
          <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">
              {featuredMenu ? `Try Our ${featuredMenu.name}` : 'Welcome to Yummy!'}
            </h1>
            <p data-aos="fade-up" data-aos-delay="100">
              {restaurantProfile?.about_us || 'Discover the best food in town!'}
            </p>
            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
              <a href="#menu" className="btn-get-started">
                Explore Menu
              </a>
              <a
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                className="glightbox btn-watch-video d-flex align-items-center"
              >
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </a>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
            {featuredMenu?.image ? (
              <Image
                src={featuredMenu.image}
                alt={featuredMenu.name}
                width={500}
                height={500}
                className="img-fluid animated"
              />
            ) : (
              <Image
                src={restaurantProfile?.logo || '/placeholder-image.jpg'}
                alt="Restaurant Image"
                width={500}
                height={500}
                className="img-fluid animated"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
