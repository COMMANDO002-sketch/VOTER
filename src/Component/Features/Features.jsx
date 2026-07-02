import "./Features.css";

function Features() {
  const features = [
    {
      title: "Secure Voting",
      desc: "Advanced encryption keeps every vote safe and confidential.",
      icon: "🔒",
    },
    {
      title: "Fast Results",
      desc: "Election results are calculated instantly after voting ends.",
      icon: "⚡",
    },
    {
      title: "Verified Users",
      desc: "Every voter is authenticated before casting a vote.",
      icon: "✅",
    },
    {
      title: "Cloud Storage",
      desc: "Election data is securely stored and backed up.",
      icon: "☁️",
    },
    {
      title: "Live Dashboard",
      desc: "Administrators monitor election progress in real time.",
      icon: "📊",
    },
    {
      title: "24/7 Support",
      desc: "Our support team is always available whenever needed.",
      icon: "🎧",
    },
  ];

  return (
    <section className="features">

      <div className="container">

        <span className="section-tag">
          OUR FEATURES
        </span>

        <h2 className="section-title">
          Why Choose Our Platform
        </h2>

        <p className="section-text">
          Everything you need to conduct transparent, secure and reliable online elections.
        </p>

        <div className="features-grid">

          {features.map((item, index) => (

            <div className="feature-card" key={index}>

              <div className="feature-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;
