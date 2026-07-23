import { images } from "../data/clinicHubContent"

function StarRating() {
  return (
    <div className="rating" aria-label="4.9 out of 5 stars">
      <span aria-hidden="true">★★★★★</span>
      <strong>4.9</strong> Across 1,597+ Reviews
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="hero section-shell" id="home">
      <img
        className="hero__image"
        src={images.heroDoctorsImage}
        alt="ClinicHub doctors welcoming a patient"
      />
      <div className="hero__overlay" />
      <div className="hero__content">
        <div className="hero__copy">
          <StarRating />
          <h1>Your Health, in Hands of Leading Medical Experts</h1>
          <a className="button button--light" href="#book">
            Book a visit
          </a>
        </div>
        <article
          className="video-card"
          aria-label="ClinicHub introduction video preview"
        >
          <div className="video-card__frame">
            <img
              src={images.introVideoImage}
              alt="Clinic walkthrough preview"
            />
            <span aria-hidden="true" className="play-button">
              ▶
            </span>
          </div>
          <p>
            Your entire family's healthcare in one place. Award-winning
            specialists, easy online booking, and care that follows through.
          </p>
        </article>
      </div>
    </section>
  )
}
