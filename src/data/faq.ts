export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "I offer a full spectrum of web services including UI/UX design, front-end and full-stack development, performance audits, SEO optimization, and brand identity design. Whether you need a landing page or a complex web application, I have you covered.",
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary by scope. A standard landing page or portfolio site typically takes 1–2 weeks. A multi-page business website takes 3–5 weeks, while a full web application can range from 6–16 weeks. I provide a detailed timeline after the initial discovery call.",
  },
  {
    id: 3,
    question: "What is your development process?",
    answer:
      "My process follows four phases: Discovery (understanding goals and requirements), Design (wireframes and visual mockups for approval), Development (building with clean, tested code), and Delivery (final QA, deployment, and handover documentation).",
  },
  {
    id: 4,
    question: "Do you work with clients remotely?",
    answer:
      "Absolutely. I work with clients globally. Communication happens via video calls, Slack, and project management tools like Notion or Linear. Time zones are no barrier — I'm flexible with scheduling.",
  },
  {
    id: 5,
    question: "What technologies do you specialize in?",
    answer:
      "My core stack is React, TypeScript, and Tailwind CSS on the front-end, with Node.js/Express or Next.js for full-stack projects. I also work with PostgreSQL, Prisma, and deploy on Vercel, Netlify, or AWS depending on the project needs.",
  },
  {
    id: 6,
    question: "Do you provide post-launch support?",
    answer:
      "Yes. I offer a 30-day post-launch support window included with every project for bug fixes and minor adjustments. Ongoing maintenance retainers are also available for clients who need regular updates or feature additions.",
  },
  {
    id: 7,
    question: "How do you handle revisions during the project?",
    answer:
      "Each project includes up to two rounds of revisions per phase (design and development). Additional revisions beyond this are billed at my standard hourly rate. I find that clear communication in the discovery phase minimizes the need for extensive revisions.",
  },
  {
    id: 8,
    question: "How do I get started?",
    answer:
      "Simply head to the Contact page and fill out the project inquiry form, or send me a direct email. I respond within 24 hours on business days. We'll schedule a free 30-minute discovery call to discuss your goals, timeline, and budget before any commitment.",
  },
];
