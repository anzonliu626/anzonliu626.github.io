import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SelectedWork } from "@/components/selected-work"
import { ExperienceSection } from "@/components/experience-section"
import { AboutSection } from "@/components/about-section"
import { ContactFooter } from "@/components/contact-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SelectedWork />
      <ExperienceSection />
      <AboutSection />
      <ContactFooter />
    </main>
  )
}
