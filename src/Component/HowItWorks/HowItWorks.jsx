import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Account",
      text: "Register securely using your email or organization credentials.",
      icon: "👤",
    },
    {
      number: "02",
      title: "Verify Identity",
      text: "Complete verification to ensure one person, one vote.",
      icon: "🪪",
    },
    {
      number: "03",
      title: "Cast Your Vote",
      text: "Select your preferred candidate and submit your vote securely.",
      icon: "🗳️",
    },
    {
      number: "04",
      title: "View Results",
      text: "Watch results update instantly after the election closes.",
      icon: "📈",
    },
  ];

  return (
    <section className="how">

      <div className="container">

        <span className="section-tag">
          HOW IT WORKS
        </span>

        <h2 className="section-title">
          Vote in Four Easy Steps
        </h2>

        <p className="section-text">
          Our voting process is simple, secure and transparent from start to finish.
        </p>

        <div className="steps">

          {steps.map((step) => (

            <div className="step-card" key={step.number}>

              <div className="step-number">
                {step.number}
              </div>

              <div className="step-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;