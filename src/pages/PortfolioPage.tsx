import { PageBanner } from '@/components/shared/PageBanner'
import { PortfolioSection } from '@/components/sections/PortfolioSection'

export function PortfolioPage() {
  return (
    <>
      <PageBanner title="Portfolio" breadcrumb="Home / Portfolio" />
      <PortfolioSection />
    </>
  )
}
