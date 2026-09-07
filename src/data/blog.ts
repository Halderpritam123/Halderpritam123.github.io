export interface BlogPost {
  id: number;
  slug: string;
  image: string;
  category: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "building-accessible-react-components",
    image: "https://picsum.photos/seed/blog1/800/500",
    category: "Development",
    title: "Building Accessible React Components from Scratch",
    date: "June 12, 2025",
    excerpt:
      "Accessibility isn't an afterthought — it's a foundation. Learn how to build React components that work for everyone, including keyboard and screen-reader users.",
    content:
      "Accessibility in React starts with semantic HTML. Using the right element for the right job — buttons for actions, anchors for navigation, headings in proper hierarchy — gives browsers and assistive technologies the information they need without any extra effort. Beyond semantics, ARIA attributes fill the gaps where HTML falls short: `aria-label` for icon-only buttons, `aria-expanded` for disclosure widgets, and `role` for custom interactive elements. Managing focus is equally critical: when a modal opens, focus should move inside it; when it closes, focus should return to the trigger. React's `useRef` and `useEffect` make this straightforward. Testing with a screen reader (NVDA, VoiceOver) and a keyboard-only workflow will surface issues that automated linters miss. Aim to meet WCAG 2.1 AA as a baseline — your users will thank you.",
  },
  {
    id: 2,
    slug: "tailwind-css-design-system",
    image: "https://picsum.photos/seed/blog2/800/500",
    category: "Web Design",
    title: "Building a Design System with Tailwind CSS",
    date: "May 28, 2025",
    excerpt:
      "Tailwind's utility-first approach pairs surprisingly well with design system thinking. Here's how to structure tokens, components, and documentation that scale.",
    content:
      "A design system on top of Tailwind begins with the `tailwind.config` file treated as your design token registry. Define your color palette, typography scale, spacing, border radii, and shadow values here — not scattered through component files. When your brand color is `accent: '#f5c518'`, every component referencing `text-accent` or `bg-accent` stays in sync automatically. Pair this with component abstractions in React: a `<Button>` component that accepts a `variant` prop and maps to specific Tailwind class combinations keeps your UI consistent while still being flexible. Document these components with Storybook or a simple internal MDX site so the whole team knows what exists before reaching for custom CSS. The result is a codebase where visual consistency is structural, not coincidental.",
  },
  {
    id: 3,
    slug: "react-performance-optimization",
    image: "https://picsum.photos/seed/blog3/800/500",
    category: "Development",
    title: "React Performance Optimization: A Practical Guide",
    date: "May 10, 2025",
    excerpt:
      "Most React performance issues come from unnecessary re-renders. Here are the techniques I reach for first when profiling a slow application.",
    content:
      "The React Profiler in DevTools is your first stop. Record a slow interaction, then look for components with long render times or components that re-render when their props haven't changed. The fixes usually fall into three categories: memoization, code splitting, and state architecture. `React.memo` prevents re-renders when props are referentially stable. `useCallback` and `useMemo` stabilize function and value references. For large lists, `react-window` or `react-virtual` virtualizes the DOM so you only render visible rows. Code splitting with `React.lazy` and `Suspense` reduces the initial bundle — ship only what the current route needs. Finally, lifting state down (colocating state close to where it's used) often solves re-render cascades caused by global state updates. Profile before and after every optimization to confirm improvement.",
  },
  {
    id: 4,
    slug: "typography-in-web-design",
    image: "https://picsum.photos/seed/blog4/800/500",
    category: "Web Design",
    title: "Typography That Works: Principles for Web Designers",
    date: "April 22, 2025",
    excerpt:
      "Great typography is invisible — readers never think about it, they just understand. Here's how to make typeface choices that serve your content.",
    content:
      "Choosing a typeface is only the beginning. The decisions that matter most are hierarchy, line-height, measure (line length), and contrast. A clear typographic hierarchy — display heading, section heading, body, caption — guides readers through content without them noticing. Line-height for body text should sit between 1.5 and 1.7; tighter than 1.4 feels cramped, looser than 1.8 loses the sense of a cohesive paragraph. Measure should stay between 45–75 characters per line for comfortable reading. In dark-theme interfaces, pure white on pure black creates harsh contrast; a soft white (`#e8e8e8`) on dark (`#111111`) is easier on the eyes during extended reading. Pair a humanist sans for UI labels with a slightly more neutral sans for body copy, or mix a serif for headings with a sans for body to add personality without chaos.",
  },
  {
    id: 5,
    slug: "shipping-with-vite-and-vercel",
    image: "https://picsum.photos/seed/blog5/800/500",
    category: "DevOps",
    title: "From Zero to Deployed: Shipping with Vite and Vercel",
    date: "April 5, 2025",
    excerpt:
      "Vite's build speed and Vercel's zero-config deployments make a powerful pair. Get your project live in under 10 minutes.",
    content:
      "Vite's dev server starts in milliseconds and HMR (Hot Module Replacement) updates components without a full reload, making the development loop feel instant. For production, `vite build` produces a highly optimized output in `dist/`: code-split chunks, tree-shaken modules, and pre-compressed assets. Deploying to Vercel is as simple as connecting your GitHub repo — Vercel detects Vite automatically, sets the correct build command (`vite build`) and output directory (`dist`), and deploys on every push to `main`. Environment variables live in the Vercel dashboard and are injected at build time via the `VITE_` prefix convention. For a React Router SPA, add a `vercel.json` with a rewrite rule (`{ \"source\": \"/(.*)\", \"destination\": \"/\" }`) to handle client-side routes. Your site is live, HTTPS-enabled, and globally distributed via Vercel's edge network in minutes.",
  },
  {
    id: 6,
    slug: "the-case-for-typescript",
    image: "https://picsum.photos/seed/blog6/800/500",
    category: "Development",
    title: "The Case for TypeScript in Every New Project",
    date: "March 18, 2025",
    excerpt:
      "TypeScript adds friction upfront but pays dividends at scale. Here's why I reach for it by default, even for small projects.",
    content:
      "The most common objection to TypeScript is that it slows you down. In the first hour, maybe. Over the lifetime of a project, it consistently speeds things up. When you rename a function, your editor flags every call site instantly. When you change a data shape, every consumer that doesn't match the new shape becomes a compile error — not a runtime bug discovered in production. TypeScript's type inference means you rarely need to annotate obvious types; the compiler figures out most of it from assignment. The patterns that matter most are: typing your data models explicitly (interfaces for domain objects), using discriminated unions for state machines (loading | success | error), and avoiding `any` in favor of `unknown` when you genuinely don't know a type. The investment in types is documentation that can't go stale — it's checked automatically on every build.",
  },
];
