export interface PortfolioItem {
  id: number;
  image: string;
  images?: string[];
  title: string;
  category: "Web Design" | "Development" | "Branding" | "Photography";
  description: string;
  skills: string[];
  github?: string;
  live?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    image: "/notebook-research.png",
    images: ["/notebook-research.png", "/notebook-login.png"],
    title: "Custom Notebook — AI Research Platform",
    category: "Development",
    description: "A full-stack AI-powered knowledge base with VS Code-style nested folder hierarchies, context-aware LLM research generation (8 structured fields), real-time SSE push updates, inline editable sections, follow-up chat per topic, saved notes, status tracking, Google & GitHub OAuth, and rate limiting — built with React, FastAPI, PostgreSQL, and deployed on Vercel.",
    skills: ["React.js", "Redux", "FastAPI", "Python", "PostgreSQL", "Docker", "JWT", "REST APIs", "Vercel"],
    github: "https://github.com/Halderpritam123/custom-notebook",
    live: "https://custom-notebook.vercel.app/",
  },
  {
    id: 2,
    image: "/inventory-management-dashboard.png",
    images: [
      "/inventory-management-dashboard.png",
      "/inventory-management-products.png",
      "/inventory-management-orders.png",
      "/inventory-management-customers.png",
    ],
    title: "Inventory & Order Management System",
    category: "Development",
    description: "A production-ready full-stack Inventory & Order Management System built as a modular monolith. Features product catalog with SKU uniqueness and stock tracking, customer registry, transactional order creation with automatic inventory deduction, over-sell prevention via pre-order stock validation, order cancellation with stock restore, and a live dashboard with aggregated business metrics. Designed for future microservice extraction with zero architectural redesign.",
    skills: ["React.js", "Redux", "FastAPI", "Python", "PostgreSQL", "Docker", "REST APIs", "Vercel"],
    github: "https://github.com/Halderpritam123/inventory-management-system",
    live: "https://inventory-management-system-beta-gules.vercel.app",
  }
];
