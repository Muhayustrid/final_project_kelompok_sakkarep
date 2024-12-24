import Link from "next/link";
import MenuPage from '@/components/menu';
import ProfilePage from '@/components/profile';
import FaqPage from '@/components/faq';
import TestimonialPage from '@/components/testimonials';
import GalleryPage from '@/components/GalleryPage';
export default async function Home() {

  return (
    <main className="main">
      {/* Hero Section */}
      <section id="hero" className="hero section light-background">
        <div className="container">
          <div className="row gy-4 justify-content-center justify-content-lg-between">
            <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                Enjoy Your Healthy
                <br />
                Delicious Food
              </h1>
              <p data-aos="fade-up" data-aos-delay={100}>
                We are team of talented designers making websites with Bootstrap
              </p>
              <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
                <Link href="#book-a-table" className="btn-get-started">
                  Booka a Table
                </Link>
                <Link
                  href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                  className="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i className="bi bi-play-circle" />
                  <span>Watch Video</span>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-5 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
            >
              <img
                src="assets/img/hero-img.png"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* /Hero Section */}
<section id="menu" className="menu section">
          <MenuPage/>
      </section>
      <section id="profile" className="profile section">
          <ProfilePage/>
      </section>
      <section id="faq" className="faq section">
          <FaqPage/>
      </section>

      {/* /Stats Section */}
      <TestimonialPage/>
      {/* Chefs Section */}
      <section id="chefs" className="chefs section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>chefs</h2>
          <p>
            <span>Our</span>{" "}
            <span className="description-title">
              Proffesional Chefs
              <br />
            </span>
          </p>
        </div>
        
        {/* End Section Title */}
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-4 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src="assets/img/anggota/ang1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <Link href="">
                      <i className="bi bi-twitter-x" />
                    </Link>
                    <Link href="">
                      <i className="bi bi-facebook" />
                    </Link>
                    <Link href="">
                      <i className="bi bi-instagram" />
                    </Link>
                    <Link href="">
                      <i className="bi bi-linkedin" />
                    </Link>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Dava Ilham Muhammad</h4>
                  <span>L200220105</span>
                </div>
              </div>
            </div>
            
            {/* End Chef Team Member */}
            <div
              className="col-lg-4 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src="assets/img/anggota/ang2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <Link href="">
                      <i className="bi bi-twitter-x" />
                    </Link>
                    <Link href="">
                      <i className="bi bi-facebook" />
                    </Link>
                    <Link href="">
                      <i className="bi bi-instagram" />
                    </Link>
                    <Link href="">
                      <i className="bi bi-linkedin" />
                    </Link>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Fachrizal Irfansyah El Zacky</h4>
                  <span>L200220117</span>
                </div>
              </div>
            </div>
            {/* End Chef Team Member */}
            <div
              className="col-lg-4 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src="assets/img/anggota/ang3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <Link href="">
                      <i className="bi bi-twitter-x" />
                    </Link>
                    <Link href="">
                      <i className="bi bi-facebook" />
                    </Link>
                    <Link href="">
                      <i className="bi bi-instagram" />
                    </Link>
                    <Link href="">
                      <i className="bi bi-linkedin" />
                    </Link>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Dzaky Rayssa Buntoro</h4>
                  <span>L200220120</span>
                </div>
              </div>
            </div>
            {/* End Chef Team Member */}
            <div
              className="col-lg-4 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src="assets/img/anggota/ang4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <Link href="">
                      <i className="bi bi-twitter-x" />
                    </Link>
                    <Link href="">
                      <i className="bi bi-facebook" />
                    </Link>
                    <Link href="">
                      <i className="bi bi-instagram" />
                    </Link>
                    <Link href="">
                      <i className="bi bi-linkedin" />
                    </Link>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Muhammad Kholis Affandi</h4>
                  <span>L200220134</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src="assets/img/anggota/ang5.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <Link href="">
                      <i className="bi bi-twitter-x" />
                    </Link>
                    <Link href="">
                      <i className="bi bi-facebook" />
                    </Link>
                    <Link href="">
                      <i className="bi bi-instagram" />
                    </Link>
                    <Link href="">
                      <i className="bi bi-linkedin" />
                    </Link>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Muhammad Yusuf Tri Daryanto</h4>
                  <span>L200220140</span>
                </div>
              </div>
            </div>
            {/* End Chef Team Member */}
            <div
              className="col-lg-4 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src="assets/img/anggota/ang6.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <Link href="">
                      <i className="bi bi-twitter-x" />
                    </Link>
                    <Link href="">
                      <i className="bi bi-facebook" />
                    </Link>
                    <Link href="">
                      <i className="bi bi-instagram" />
                    </Link>
                    <Link href="">
                      <i className="bi bi-linkedin" />
                    </Link>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Muhammad Ryan Ardiansyah</h4>
                  <span>L200220142</span>
                </div>
              </div>
            </div>
            {/* End Chef Team Member */}
          </div>
        </div>
      </section>
      {/* /Chefs Section */}
      
      {/* Gallery Section */}
      <GalleryPage/>
      {/* /Gallery Section */}
      {/* Contact Section */}
      <section id="contact" className="contact section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Location</h2>
          <p>
            <span>Need Help?</span>{" "}
            <span className="description-title">Visit Us</span>
          </p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="mb-5">
            <iframe
              style={{ width: "100%", height: 400 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1354960332746!2d110.76433137363892!3d-7.5602020924536975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a145a0e92d00d%3A0xf334170d1351a115!2sJl.%20A.%20Yani%20No.127%2C%20Banaran%2C%20Pabelan%2C%20Kec.%20Kartasura%2C%20Kabupaten%20Sukoharjo%2C%20Jawa%20Tengah%2057169!5e0!3m2!1sid!2sid!4v1734889707581!5m2!1sid!2sid"
              frameBorder={0}
              allowFullScreen={true}
            />
          </div>
          {/* End Google Maps */}
        </div>
      </section>
      {/* /Contact Section */}
    </main>

  );
}