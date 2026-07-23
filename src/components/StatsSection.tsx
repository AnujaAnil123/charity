import { stats } from "../data/clinicHubContent"

export function StatsSection() {
  return (
    <section className="stats" aria-label="ClinicHub highlights">
      {stats.map((stat) => (
        <article className="stat" key={stat.value}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </article>
      ))}
    </section>
  )
}
