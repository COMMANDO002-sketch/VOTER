import "./About.css";

function About() {
  return (
    <section className="about">

      <div className="container about-container">

        <div className="about-image">

          <div className="image-card">

            <h2>100%</h2>

            <span>Secure Voting</span>

          </div>

        </div>

        <div className="about-content">

          <span className="about-tag">
            ABOUT OUR PLATFORM
          </span>

          <h2>
            Digital Voting Made
            <br />
            Simple & Reliable
          </h2>

          <p>
            Our electronic voting platform allows organizations,
            institutions and communities to conduct secure elections
            with complete transparency.
          </p>

          <div className="about-list">

            <div>✔ End-to-End Encryption</div>

            <div>✔ Instant Vote Counting</div>

            <div>✔ Real-time Monitoring</div>

            <div>✔ Multi-device Access</div>

          </div>

          <button>
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}

export default About;