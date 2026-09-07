export interface Skill {
  id: number;
  label: string;
  percentage: number;
}

export const skills: Skill[] = [
  { id: 1,  label: "Python",                  percentage: 90 },
  { id: 2,  label: "JavaScript (ES6+)",        percentage: 90 },
  { id: 3,  label: "TypeScript",               percentage: 88 },
  { id: 4,  label: "React.js",                 percentage: 90 },
  { id: 5,  label: "Redux",                    percentage: 80 },
  { id: 6,  label: "Node.js",                  percentage: 87 },
  { id: 7,  label: "Express.js",               percentage: 85 },
  { id: 8,  label: "FastAPI",                  percentage: 88 },
  { id: 9,  label: "Microservices",            percentage: 86 },
  { id: 10, label: "Apache Kafka",             percentage: 82 },
  { id: 11, label: "REST APIs",                percentage: 90 },
  { id: 12, label: "Socket.IO",                percentage: 78 },
  { id: 13, label: "JWT",                      percentage: 80 },
  { id: 14, label: "IAM / RBAC",               percentage: 82 },
  { id: 15, label: "Docker",                   percentage: 84 },
  { id: 16, label: "Kubernetes",               percentage: 80 },
  { id: 17, label: "AWS",                      percentage: 78 },
  { id: 18, label: "Nginx",                    percentage: 75 },
  { id: 19, label: "Linux",                    percentage: 78 },
  { id: 20, label: "CI/CD",                    percentage: 76 },
  { id: 21, label: "Vercel",                   percentage: 82 },
  { id: 22, label: "Single-SPA",               percentage: 78 },
  { id: 23, label: "DAG / Data Pipelines",     percentage: 80 },
  { id: 24, label: "MongoDB",                  percentage: 78 },
  { id: 25, label: "Delta Lake",               percentage: 72 },
  { id: 26, label: "Git",                      percentage: 90 },
  { id: 27, label: "GitHub",                   percentage: 90 },
  { id: 28, label: "Jira",                     percentage: 80 },
  { id: 29, label: "Postman",                  percentage: 85 },
  { id: 30, label: "SonarCloud",               percentage: 78 },
  { id: 31, label: "Prompt Engineering",       percentage: 82 },
  { id: 32, label: "TDD",                      percentage: 78 },
  { id: 33, label: "SOLID Principles",         percentage: 84 },
  { id: 34, label: "Agile / Scrum",            percentage: 85 },
];
