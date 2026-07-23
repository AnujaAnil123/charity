import { services } from "../data/clinicHubContent"

export function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="section-heading">
        <p>Our services</p>
        <h2>Complete family care, thoughtfully coordinated.</h2>
      </div>
      <div className="card-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <img src={service.image} alt="" />
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
