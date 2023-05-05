import { Link } from "react-router-dom";
import home from "../assets/profile.png";

const Home = () => {
  return (
    <>
      {/* <!-- Header--> */}
      <header className="py-5">
        <div className="container px-5 pb-5">
          <div className="row gx-5 align-items-center">
            <div className="col-xxl-5">
              {/* <!-- Header text content--> */}
              <div className="text-center text-xxl-start">
                <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                  <div className="text-uppercase">
                    Design &middot; Develop &middot; Deploy
                  </div>
                </div>
                <div className="fs-3 fw-light text-muted">
                  I can help your business to
                </div>
                <h1 className="display-3 fw-bolder mb-5">
                  <span className="text-gradient d-inline">
                    Get online and grow fast
                  </span>
                </h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  <Link
                    className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                    to="/projects"
                  >
                    Projects
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-7">
              {/* <!-- Header profile picture--> */}
              <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                <div className="profile bg-gradient-primary-to-secondary">
                  {/* <!-- TIP: For best results, use a photo with a transparent background like the demo example below-->
                                    <!-- Watch a tutorial on how to do this on YouTube (link)--> */}
                  <img className="profile-img" src={home} alt="..." />
                  <div className="dots-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- About Section--> */}
      <section className="bg-light py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
              <div className="text-center my-5">
                <h2 className="display-5 fw-bolder">
                  <span className="text-gradient d-inline">About Me</span>
                </h2>
                <p className="lead fw-light mb-4">
                  My name is Fahad Abbas and I'm a Web-developer
                </p>
                <p className="text-muted">
                  Hello, I'm a self-taught web developer with a passion for
                  coding and creating intuitive web applications. I have worked
                  on personal projects and gained proficiency in HTML, CSS,
                  JavaScript, and React. I am always eager to learn and improve
                  my skills to become a valuable asset to any team.
                </p>
                <div className="d-flex justify-content-center fs-2 gap-4">
                  <a
                    className="text-gradient"
                    href="https://www.instagram.com/__fahad__abbas__/"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    className="text-gradient"
                    href="https://www.linkedin.com/in/fahadabbas920/"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a
                    className="text-gradient"
                    href="https://github.com/fahadabbas920"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </div>
                <Link
                  className="btn btn-primary btn-lg px-5 py-3 fs-6 fw-bolder" // me-sm-3
                  to="/about"
                >
                  About me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
