import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Student President",
      text: "The platform made our election simple, transparent and completely stress-free.",
    },
    {
      name: "Michael Adams",
      role: "Election Officer",
      text: "The live results and secure verification gave everyone confidence in the process.",
    },
    {
      name: "Grace Williams",
      role: "Organization Secretary",
      text: "One of the easiest voting systems we've ever used. Fast, reliable and professional.",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">

        <span className="section-tag">
          TESTIMONIALS
        </span>

        <h2 className="section-title">
          What Our Users Say
        </h2>

        <div className="testimonial-grid">

          {testimonials.map((item, index) => (

            <div className="testimonial-card" key={index}>

              <div className="avatar">
                {item.name.charAt(0)}
              </div>

              <p>"{item.text}"</p>

              <h3>{item.name}</h3>

              <span>{item.role}</span>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;