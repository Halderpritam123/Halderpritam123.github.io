export interface Service {
  id: number;
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 1,
    icon: "GitBranch",
    title: "Distributed Systems & Microservices",
    description:
      "Designing and building high-throughput microservices with FastAPI and Node.js to handle complex asynchronous workflows under high operational loads.",
  },
  {
    id: 2,
    icon: "Code2",
    title: "Full-Stack Development",
    description:
      "Building end-to-end web applications using React, TypeScript, Node.js, and Python — from visual pipeline platforms to enterprise LMS systems.",
  },
  {
    id: 3,
    icon: "Cpu",
    title: "AI-Augmented Engineering",
    description:
      "Integrating AI-assisted development workflows and prompt engineering to accelerate code reviews, enforce edge-case coverage, and maintain SOLID design standards.",
  },
  {
    id: 4,
    icon: "Layers",
    title: "Event-Driven Architecture",
    description:
      "Implementing asynchronous inter-service communication and event streaming using Apache Kafka to ensure decoupled, fault-tolerant message distribution.",
  },
  {
    id: 5,
    icon: "Box",
    title: "DevOps & Cloud Infrastructure",
    description:
      "Deploying and managing containerized microservices with Docker and Kubernetes on AWS, ensuring automated scaling and reliable deployments.",
  },
  {
    id: 6,
    icon: "Shield",
    title: "Identity & Access Management",
    description:
      "Designing enterprise-grade IAM engines featuring Role-Based Access Control (RBAC) aligned with cloud security best practices.",
  },
];
