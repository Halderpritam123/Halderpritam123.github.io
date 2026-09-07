export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Working with Pritam was an absolute pleasure. The new website exceeded every expectation — clean, fast, and exactly on-brand. Our conversion rate jumped 40% in the first month.",
    name: "Sarah Mitchell",
    title: "CEO, Bloom Creative Agency",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    quote:
      "Pritam delivered a fully responsive, performant React dashboard on a tight deadline. The code quality was outstanding and the communication was top-notch throughout the project.",
    name: "James Thornton",
    title: "CTO, Vault Technologies",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 3,
    quote:
      "I needed a personal brand refresh and Pritam nailed it. The attention to detail in both design and development is rare. I couldn't recommend this work more highly.",
    name: "Priya Nair",
    title: "Freelance UX Consultant",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 4,
    quote:
      "Our e-commerce site went from slow and outdated to a polished, lightning-fast experience. Pritam's performance audit saved us thousands in lost sales. Incredible value.",
    name: "Marcus Lee",
    title: "Founder, Craft Coffee Co.",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
];
