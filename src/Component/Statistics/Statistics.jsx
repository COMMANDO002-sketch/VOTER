import "./Statistics.css";

function Statistics() {
  const stats = [
    {
      number: "150K+",
      title: "Registered Voters",
    },
    {
      number: "320+",
      title: "Successful Elections",
    },
    {
      number: "98%",
      title: "Accuracy Rate",
    },
    {
      number: "24/7",
      title: "Customer Support",
    },
  ];

  return (
    <section className="statistics">

      <div className="container">

        <span className="section-tag">
          OUR IMPACT
        </span>

        <h2 className="section-title">
          Trusted Across Many Organizations
        </h2>

        <p className="section-text">
          Thousands of users rely on our secure voting platform every day.
        </p>

        <div className="stats-grid">

          {stats.map((item, index) => (

            <div className="stat-card" key={index}>

              <h1>{item.number}</h1>

              <p>{item.title}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Statistics;