import "./FeaturedElections.css";

function FeaturedElections() {
  const elections = [
    {
      title: "Student Union Election",
      status: "Active",
      date: "Ends: July 20, 2026",
      description:
        "Vote for the next student union leaders securely and transparently.",
    },
    {
      title: "Faculty Representative",
      status: "Upcoming",
      date: "Starts: July 25, 2026",
      description:
        "Elect faculty representatives to serve the academic community.",
    },
    {
      title: "Club President",
      status: "Closed",
      date: "Closed: June 30, 2026",
      description:
        "Election has ended. View the final results and statistics.",
    },
  ];

  return (
    <section className="featured">

      <div className="container">

        <span className="section-tag">
          ACTIVE ELECTIONS
        </span>

        <h2 className="section-title">
          Participate In Current Elections
        </h2>

        <p className="section-text">
          Join ongoing elections and help shape your organization through secure online voting.
        </p>

        <div className="election-grid">

          {elections.map((item, index) => (

            <div className="election-card" key={index}>

              <div className={`badge ${item.status.toLowerCase()}`}>
                {item.status}
              </div>

              <div className="election-image">
                🗳️
              </div>

              <h3>{item.title}</h3>

              <small>{item.date}</small>

              <p>{item.description}</p>

              <button>View Election</button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedElections;