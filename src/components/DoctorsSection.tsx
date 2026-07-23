import { doctors } from "../data/clinicHubContent"

export function DoctorsSection() {
  return (
    <section className="section" id="doctors">
      <div className="section-heading">
        <p>Meet the team</p>
        <h2>Award-winning doctors with one shared patient record.</h2>
      </div>
      <div className="doctor-grid">
        {doctors.map((doctor) => (
          <article className="doctor-card" key={doctor.name}>
            <img src={doctor.image} alt={doctor.name} />
            <div>
              <h3>{doctor.name}</h3>
              <p>{doctor.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
