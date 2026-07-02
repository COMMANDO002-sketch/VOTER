import "./Hero.css";
import heroImage from "../../asset/E-Voting Application __ Behance/img1.png";

function Hero() {
  return (
    <section className="hero">

      <div className="container hero-container">

        <div className="hero-text">

          <span className="tag">
            Secure • Transparent • Trusted
          </span>

          <h1>
            Vote Anytime,
            <br />
            Anywhere,
            <span> Securely.</span>
          </h1>

          <p>
            Experience a modern electronic voting platform that delivers
            transparency, security and speed. Participate in elections with
            confidence from any device.
          </p>

          <div className="hero-buttons">

            <button className="vote-btn">
              Vote Now
            </button>

            <button className="learn-btn">
              Learn More
            </button>

          </div>

          <div className="hero-stats">

            <div>

              <h2>150K+</h2>

              <span>Registered Voters</span>

            </div>

            <div>

              <h2>98%</h2>

              <span>Successful Elections</span>

            </div>

            <div>

              <h2>50+</h2>

              <span>Organizations</span>

            </div>

          </div>

        </div>

        <div className="hero-image">

          <img src={heroImage} alt="Voting Illustration" />

          <div className="card card1">

            <h4>✔ Secure</h4>

            <p>Encrypted Voting System</p>

          </div>

          <div className="card card2">

            <h4>Live Result</h4>

            <p>Updated Instantly</p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;