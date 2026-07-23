import { images, navItems } from "../data/clinicHubContent"

function toSectionId(label: string) {
  return label.toLowerCase().replace(/ /g, "-")
}

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="ClinicHub home">
        <img src={images.clinicLogo} alt="ClinicHub" />
        <span>ClinicHub</span>
      </a>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <a href={`#${toSectionId(item)}`} key={item}>
            {item}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#book">
        Book a Visit
      </a>
    </header>
  )
}
