import { appointmentSteps } from "../data/clinicHubContent"

export function ProcessSection() {
  return (
    <section className="section process" id="how-it-works">
      <div className="section-heading">
        <p>How it works</p>
        <h2>From first click to follow-up, every step is simple.</h2>
      </div>
      <div className="steps">
        {appointmentSteps.map((step, index) => (
          <article className="step-card" key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <img src={step.image} alt="" />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
