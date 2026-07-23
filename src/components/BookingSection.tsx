import { services } from "../data/clinicHubContent"

export function BookingSection() {
  return (
    <section className="booking" id="book">
      <div>
        <p className="eyebrow">Ready when you are</p>
        <h2>Book a visit with a ClinicHub specialist today.</h2>
      </div>
      <form className="booking-form">
        <input aria-label="Full name" placeholder="Full name" />
        <input
          aria-label="Email address"
          placeholder="Email address"
          type="email"
        />
        <select aria-label="Preferred service" defaultValue="">
          <option value="" disabled>
            Preferred service
          </option>
          {services.map((service) => (
            <option key={service.title}>{service.title}</option>
          ))}
        </select>
        <button className="button button--dark" type="submit">
          Request appointment
        </button>
      </form>
    </section>
  )
}
