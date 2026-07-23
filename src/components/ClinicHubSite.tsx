import { BookingSection } from "./BookingSection"
import { DoctorsSection } from "./DoctorsSection"
import { Header } from "./Header"
import { HeroSection } from "./HeroSection"
import { IntroSection } from "./IntroSection"
import { ProcessSection } from "./ProcessSection"
import { ReviewsSection } from "./ReviewsSection"
import { ServicesSection } from "./ServicesSection"
import { StatsSection } from "./StatsSection"

export function ClinicHubSite() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <IntroSection />
        <ServicesSection />
        <ProcessSection />
        <DoctorsSection />
        <ReviewsSection />
        <BookingSection />
      </main>
    </>
  )
}
