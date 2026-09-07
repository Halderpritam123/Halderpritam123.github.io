import { PageBanner } from '@/components/shared/PageBanner'
import { SectionHeading } from '@/components/shared/SectionHeading'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqItems } from '@/data/faq'

export function FAQPage() {
  return (
    <>
      <PageBanner title="FAQ" breadcrumb="Home / FAQ" />

      <section className="section-padding bg-th-bg transition-colors duration-300">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            subtitle="Questions & Answers"
            title="Frequently Asked Questions"
            description="Can't find what you're looking for? Reach out via the Contact page and I'll get back to you within 24 hours."
            centered
          />
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map(item => (
              <AccordionItem key={item.id} value={`item-${item.id}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}
