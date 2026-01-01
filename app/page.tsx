import { HeroWithImage } from "@/components/sections/hero/HeroWithImage"
import { FeaturedServices } from "@/components/sections/services/FeaturedServices"
import { AboutSection } from "@/components/sections/about/AboutSection"
import { FeaturesSection } from "@/components/sections/features/FeaturesSection"
import { CTASection } from "@/components/sections/cta/CTASection"
import { LocationSection } from "@/components/sections/location/LocationSection"
import { FaqSection } from "@/components/sections/faq/FaqSection"

export default function Home() {
  return (
    <>
      <HeroWithImage
        subtitle="San Francisco's Artisan Bakery Since 2010"
        title="Fresh Baked Daily with Love"
        backgroundImage="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=80"
        backgroundImageAlt="Fresh artisan sourdough bread and pastries"
        ctaText="View Our Menu"
        ctaUrl="/treatments"
      />
      <FeaturedServices />
      <AboutSection />
      <FeaturesSection />
      <CTASection />
      <LocationSection />
      <FaqSection />
    </>
  )
}
