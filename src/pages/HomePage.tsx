import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { CounterSection } from '@/components/sections/CounterSection'
import { ProjectSkillsSection } from '@/components/sections/ProjectSkillsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectSkillsSection />
      <CounterSection />
      <ContactSection />
    </>
  )
}
