import contact from "../assets/contact.png"

const Contact = () => {
  return (
    <>
      {/* <!-- Page content--> */}
      <section className="py-5">
        <div className="container px-5">
          {/* <!-- Contact form--> */}
          <div className="bg-light rounded-4 py-5 px-4 px-md-5">
            <div className="text-center mb-5">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                <i className="bi bi-envelope"></i>
              </div>
              <h1 className="fw-bolder">Get in touch</h1>
              <p className="lead fw-normal text-muted mb-0">
                Let's work together!
              </p>
              <i class="fa-solid fa-arrow-down fs-3"></i>
            </div>
            
            <div className="d-flex justify-content-center  mt-xxl-0"> {/*mt-5*/}
            
                <div className="contact">
                {/* bg-gradient-primary-to-secondary  */}
                  {/* <!-- TIP: For best results, use a photo with a transparent background like the demo example below-->
                                    <!-- Watch a tutorial on how to do this on YouTube (link)--> */}
                  <img className="contact-img" src={contact} alt="..." />
                  <div className="dots-1"></div>
                </div>
              </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6 ">
                {/* <!-- * * * * * * * * * * * * * * *-->
                      <!-- * * SB Forms Contact Form * *-->
                      <!-- * * * * * * * * * * * * * * *-->
                      <!-- This form is pre-integrated with SB Forms.-->
                      <!-- To make this form functional, sign up at-->
                      <!-- https://startbootstrap.com/solution/contact-forms-->
                      <!-- to get an API token!--> */}
                {/* <h1 class="display-6">Phone no: </h1> */}
                <div className="d-flex justify-content-center">
                  <div className="d-flex flex-column">
                    <span className="mt-1 me-5 fw-bold">Call / WA</span>
                    <span className="mt-1 me-5 fw-bold">Email</span>
                    <span className="mt-1 me-5 fw-bold">Address</span>
                    <span className="mt-1 me-5 fw-bold">Instagram</span>
                  </div>
                  <div className="d-flex flex-column">
                    <a
                      href="tel:+971528673166"
                      className="custom-link nav-link text-primary mt-1"
                    >
                      <span>+971 (0) 52 867 3166</span>
                    </a>
                    <a
                      href="mailto:fahadabbas920@gmail.com"
                      className="custom-link nav-link mt-1 text-primary"
                    >
                      <span>fahadabbas920@gmail.com </span>
                    </a>
                    <span className="mt-1">Dubai, United Arab Emirates</span>
                    <a
                      href="https://www.instagram.com/__fahad__abbas__/"
                      className="nav-link mt-1 text-primary"
                    >
                      <span className="mt-1">__fahad__abbas__</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
