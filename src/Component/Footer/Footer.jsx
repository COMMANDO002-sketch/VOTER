import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-column">

          <h2 className="footer-logo">E-Vote</h2>

          <p>
            Secure, transparent and reliable online voting platform
            built for organizations, schools and communities.
          </p>

        </div>

        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Elections</a>

        </div>

        <div className="footer-column">

          <h3>Services</h3>

          <a href="#">Online Voting</a>
          <a href="#">Election Setup</a>
          <a href="#">Results</a>
          <a href="#">Support</a>

        </div>

        <div className="footer-column">

          <h3>Contact</h3>

          <p>adeniranpatrick38.com</p>
          <p>+234 805 415 0656</p>
          <p>Lagos, Nigeria</p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 E-Vote. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;