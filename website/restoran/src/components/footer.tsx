import { fetchOpeningHours } from '@/lib/api';

const Footer = async () => {
  const openingHours = await fetchOpeningHours();

  const formatTime = (time: string) => time.replace(/:00$/, '');

  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <div className="row gy-3">
          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-geo-alt icon" />
            <div className="address">
              <h4>Address</h4>
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-telephone icon" />
            <div>
              <h4>Contact</h4>
              <p>
                <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                <br />
                <strong>Email:</strong> <span>info@example.com</span>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-clock icon" />
            <div>
              <h4>Opening Hours</h4>
              <ul className="list-unstyled">
                {openingHours.map(({ day, opening_time, closing_time }, index) => (
                  <li key={index} className="d-flex justify-content-between">
                    <strong>{day}:</strong>
                    <span>
                      {formatTime(opening_time)} - {formatTime(closing_time)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4>Follow Us</h4>
            <div className="social-links d-flex">
              <a href="#" className="twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span> <strong className="px-1 sitename">Yummy</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
