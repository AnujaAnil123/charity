import { images } from "../data/clinicHubContent"

export function ReviewsSection() {
  return (
    <section className="reviews section-shell" id="reviews">
      <div>
        <p className="eyebrow">Patient stories</p>
        <h2>
          “ClinicHub made it easy to coordinate care for my entire family in one
          afternoon.”
        </h2>
        <p>
          Same-week appointments, clear next steps, and warm clinicians at every
          visit.
        </p>
      </div>
      <div className="badges">
        <img src={images.isoBadge} alt="ISO certified badge" />
        <img src={images.hipaaBadge} alt="HIPAA compliant badge" />
      </div>
    </section>
  )
}
