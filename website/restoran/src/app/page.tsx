import Link from "next/link";
import MenuPage from '@/components/menu';
import ProfilePage from '@/components/profile';
import FaqPage from '@/components/faq';
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
      {/* Why Us Section */}
      <section id="why-us" className="why-us section light-background">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
              <div className="why-box">
                <h3>Why Choose Yummy</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                  aute irure dolor in reprehenderit Asperiores dolores sed et.
                  Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio
                  ad corporis.
                </p>
                <div className="text-center">
                  <Link href="#" className="more-btn">
                    <span>Learn More</span> <i className="bi bi-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            {/* End Why Box */}
            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="row gy-4" data-aos="fade-up" data-aos-delay={200}>
                <div className="col-xl-4">
                  <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-clipboard-data" />
                    <h4>Corporis voluptates officia eiusmod</h4>
                    <p>
                      Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                      laboris nisi ut aliquip
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div className="col-xl-4" data-aos="fade-up" data-aos-delay={300}>
                  <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-gem" />
                    <h4>Ullamco laboris ladore lore pan</h4>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa
                      qui officia deserunt
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div className="col-xl-4" data-aos="fade-up" data-aos-delay={400}>
                  <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-inboxes" />
                    <h4>Labore consequatur incidid dolore</h4>
                    <p>
                      Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                      maiores omnis facere
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Why Us Section */}
      {/* Stats Section */}
      <section id="stats" className="stats section dark-background">
        <img src="assets/img/stats-bg.jpg" alt="" data-aos="fade-in" />
        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={232}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Clients</p>
              </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={521}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Projects</p>
              </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={1453}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Hours Of Support</p>
              </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={32}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Workers</p>
              </div>
            </div>
            {/* End Stats Item */}
          </div>
        </div>
      </section>
      {/* /Stats Section */}
      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section light-background">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>TESTIMONIALS</h2>
          <p>
            What Are They <span className="description-title">Saying About Us</span>
          </p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="row gy-4 justify-content-center">
                    <div className="col-lg-6">
                      <div className="testimonial-content">
                        <p>
                          <i className="bi bi-quote quote-icon-left" />
                          <span>
                            Proin iaculis purus consequat sem cure digni ssim donec
                            porttitora entum suscipit rhoncus. Accusantium quam,
                            ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                            risus at semper.
                          </span>
                          <i className="bi bi-quote quote-icon-right" />
                        </p>
                        <h3>Saul Goodman</h3>
                        <h4>Ceo &amp; Founder</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 text-center">
                      <img
                        src="assets/img/testimonials/testimonials-1.jpg"
                        className="img-fluid testimonial-img"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="row gy-4 justify-content-center">
                    <div className="col-lg-6">
                      <div className="testimonial-content">
                        <p>
                          <i className="bi bi-quote quote-icon-left" />
                          <span>
                            Export tempor illum tamen malis malis eram quae irure
                            esse labore quem cillum quid cillum eram malis quorum
                            velit fore eram velit sunt aliqua noster fugiat irure
                            amet legam anim culpa.
                          </span>
                          <i className="bi bi-quote quote-icon-right" />
                        </p>
                        <h3>Sara Wilsson</h3>
                        <h4>Designer</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 text-center">
                      <img
                        src="assets/img/testimonials/testimonials-2.jpg"
                        className="img-fluid testimonial-img"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="row gy-4 justify-content-center">
                    <div className="col-lg-6">
                      <div className="testimonial-content">
                        <p>
                          <i className="bi bi-quote quote-icon-left" />
                          <span>
                            Enim nisi quem export duis labore cillum quae magna enim
                            sint quorum nulla quem veniam duis minim tempor labore
                            quem eram duis noster aute amet eram fore quis sint
                            minim.
                          </span>
                          <i className="bi bi-quote quote-icon-right" />
                        </p>
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 text-center">
                      <img
                        src="assets/img/testimonials/testimonials-3.jpg"
                        className="img-fluid testimonial-img"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="row gy-4 justify-content-center">
                    <div className="col-lg-6">
                      <div className="testimonial-content">
                        <p>
                          <i className="bi bi-quote quote-icon-left" />
                          <span>
                            Fugiat enim eram quae cillum dolore dolor amet nulla
                            culpa multos export minim fugiat minim velit minim dolor
                            enim duis veniam ipsum anim magna sunt elit fore quem
                            dolore labore illum veniam.
                          </span>
                          <i className="bi bi-quote quote-icon-right" />
                        </p>
                        <h3>John Larson</h3>
                        <h4>Entrepreneur</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 text-center">
                      <img
                        src="assets/img/testimonials/testimonials-4.jpg"
                        className="img-fluid testimonial-img"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
      {/* /Testimonials Section */}
      {/* Events Section */}
      <section id="events" className="events section">
        <div className="container-fluid" data-aos="fade-up" data-aos-delay={100}>
          <div className="swiper">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide event-item d-flex flex-column justify-content-end"
                style={{ backgroundImage: "url(assets/img/events-1.jpg)" }}
              >
                <h3>Custom Parties</h3>
                <div className="price align-self-start">$99</div>
                <p className="description">
                  Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum
                  voluptas eos omnis facere. Enim facilis veritatis id est rem
                  repudiandae nulla expedita quas.
                </p>
              </div>
              {/* End Event item */}
              <div
                className="swiper-slide event-item d-flex flex-column justify-content-end"
                style={{ backgroundImage: "url(assets/img/events-2.jpg)" }}
              >
                <h3>Private Parties</h3>
                <div className="price align-self-start">$289</div>
                <p className="description">
                  In delectus sint qui et enim. Et ab repudiandae inventore quaerat
                  doloribus. Facere nemo vero est ut dolores ea assumenda et.
                  Delectus saepe accusamus aspernatur.
                </p>
              </div>
              {/* End Event item */}
              <div
                className="swiper-slide event-item d-flex flex-column justify-content-end"
                style={{ backgroundImage: "url(assets/img/events-3.jpg)" }}
              >
                <h3>Birthday Parties</h3>
                <div className="price align-self-start">$499</div>
                <p className="description">
                  Laborum aperiam atque omnis minus omnis est qui assumenda quos.
                  Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut
                  quibusdam maxime. Non enim perspiciatis.
                </p>
              </div>
              {/* End Event item */}
              <div
                className="swiper-slide event-item d-flex flex-column justify-content-end"
                style={{ backgroundImage: "url(assets/img/events-4.jpg)" }}
              >
                <h3>Wedding Parties</h3>
                <div className="price align-self-start">$899</div>
                <p className="description">
                  Laborum aperiam atque omnis minus omnis est qui assumenda quos.
                  Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut
                  quibusdam maxime. Non enim perspiciatis.
                </p>
              </div>
              {/* End Event item */}
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
      {/* /Events Section */}
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
                    src="assets/img/chefs/chefs-1.jpg"
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
                  <h4>Walter White</h4>
                  <span>Master Chef</span>
                  <p>
                    Velit aut quia fugit et et. Dolorum ea voluptate vel tempore
                    tenetur ipsa quae aut. Ipsum exercitationem iure minima enim
                    corporis et voluptate.
                  </p>
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
                    src="assets/img/chefs/chefs-2.jpg"
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
                  <h4>Sarah Jhonson</h4>
                  <span>Patissier</span>
                  <p>
                    Quo esse repellendus quia id. Est eum et accusantium pariatur
                    fugit nihil minima suscipit corporis. Voluptate sed quas
                    reiciendis animi neque sapiente.
                  </p>
                </div>
              </div>
            </div>
            {/* End Chef Team Member */}
            <div
              className="col-lg-4 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src="assets/img/chefs/chefs-3.jpg"
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
                  <h4>William Anderson</h4>
                  <span>Cook</span>
                  <p>
                    Vero omnis enim consequatur. Voluptas consectetur unde qui
                    molestiae deserunt. Voluptates enim aut architecto porro
                    aspernatur molestiae modi.
                  </p>
                </div>
              </div>
            </div>
            {/* End Chef Team Member */}
          </div>
        </div>
      </section>
      {/* /Chefs Section */}
      {/* Book A Table Section */}
      <section id="book-a-table" className="book-a-table section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Book A Table</h2>
          <p>
            <span>Book Your</span>{" "}
            <span className="description-title">
              Stay With Us
              <br />
            </span>
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row g-0" data-aos="fade-up" data-aos-delay={100}>
            <div
              className="col-lg-4 reservation-img"
              style={{ backgroundImage: "url(assets/img/reservation.jpg)" }}
            />
            <div
              className="col-lg-8 d-flex align-items-center reservation-form-bg"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <form
                action="forms/book-a-table.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row gy-4">
                  <div className="col-lg-4 col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required={true}
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required={true}
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      id="phone"
                      placeholder="Your Phone"
                      required={true}
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <input
                      type="date"
                      name="date"
                      className="form-control"
                      id="date"
                      placeholder="Date"
                      required={true}
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <input
                      type="time"
                      className="form-control"
                      name="time"
                      id="time"
                      placeholder="Time"
                      required={true}
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <input
                      type="number"
                      className="form-control"
                      name="people"
                      id="people"
                      placeholder="# of people"
                      required={true}
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="text-center mt-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your booking request was sent. We will call back or send an
                    Email to confirm your reservation. Thank you!
                  </div>
                  <button type="submit">Book a Table</button>
                </div>
              </form>
            </div>
            {/* End Reservation Form */}
          </div>
        </div>
      </section>
      {/* /Book A Table Section */}
      {/* Gallery Section */}
      <section id="gallery" className="gallery section light-background">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Gallery</h2>
          <p>
            <span>Check</span>{" "}
            <span className="description-title">Our Gallery</span>
          </p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="swiper">
            <div className="swiper-wrapper align-items-center">
              <div className="swiper-slide">
                <Link
                  className="glightbox"
                  data-gallery="images-gallery"
                  href="assets/img/gallery/gallery-1.jpg"
                >
                  <img
                    src="assets/img/gallery/gallery-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link
                  className="glightbox"
                  data-gallery="images-gallery"
                  href="assets/img/gallery/gallery-2.jpg"
                >
                  <img
                    src="assets/img/gallery/gallery-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link
                  className="glightbox"
                  data-gallery="images-gallery"
                  href="assets/img/gallery/gallery-3.jpg"
                >
                  <img
                    src="assets/img/gallery/gallery-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link
                  className="glightbox"
                  data-gallery="images-gallery"
                  href="assets/img/gallery/gallery-4.jpg"
                >
                  <img
                    src="assets/img/gallery/gallery-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link
                  className="glightbox"
                  data-gallery="images-gallery"
                  href="assets/img/gallery/gallery-5.jpg"
                >
                  <img
                    src="assets/img/gallery/gallery-5.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link
                  className="glightbox"
                  data-gallery="images-gallery"
                  href="assets/img/gallery/gallery-6.jpg"
                >
                  <img
                    src="assets/img/gallery/gallery-6.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link
                  className="glightbox"
                  data-gallery="images-gallery"
                  href="assets/img/gallery/gallery-7.jpg"
                >
                  <img
                    src="assets/img/gallery/gallery-7.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link
                  className="glightbox"
                  data-gallery="images-gallery"
                  href="assets/img/gallery/gallery-8.jpg"
                >
                  <img
                    src="assets/img/gallery/gallery-8.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
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
          <form
            action="forms/contact.php"
            method="post"
            className="php-email-form"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            <div className="row gy-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required={true}
                />
              </div>
              <div className="col-md-6 ">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  required={true}
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  required={true}
                />
              </div>
              <div className="col-md-12">
                <textarea
                  className="form-control"
                  name="message"
                  rows={6}
                  placeholder="Message"
                  required={true}
                  defaultValue={""}
                />
              </div>
              <div className="col-md-12 text-center">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
          {/* End Contact Form */}
        </div>
      </section>
      {/* /Contact Section */}
    </main>

  );
}