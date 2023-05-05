const Footer = () => {
  return (
    // <!-- Footer-->
    <footer className="bg-white py-4 mt-auto">
      <div className="container px-5">
        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
          <div className="col-auto">
            <div className="small m-0">Created By: Fahad Abbas</div>
          </div>
          <div className="col-auto">
            {/* <a className="small" href="#!">Privacy</a> */}
            <a href="https://www.instagram.com/__fahad__abbas__/">Instagram</a>
            <span className="mx-1">&middot;</span>
            {/* <a className="small" href="#!">
              Terms
            </a> */}
            <a href="https://wa.me/+971528673166">WhatsApp</a>

            <span className="mx-1">&middot;</span>
            {/* <a className="small" href="#!">
              Contact
            </a> */}
            <a href="tel:+971528673166">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
