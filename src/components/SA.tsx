import React from "react";
import "../styles/print.css";

interface Skill {
  name: string;
  category: "frontend" | "backend" | "cloud" | "language";
  level: number; // 1-100
  icon: string;
  color: string;
}

interface Project {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
  type: "enterprise" | "startup" | "consulting" | "open-source";
  icon: string;
}

interface SAProps {
  name?: string;
  title?: string;
  experience?: string;
  location?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  avatar?: string;
  skills?: Skill[];
  projects?: Project[];
}

const defaultSkills: Skill[] = [
  {
    name: "C#",
    category: "language",
    level: 98,
    icon: "#️⃣",
    color: "bg-indigo-500",
  },
  {
    name: "Java",
    category: "language",
    level: 95,
    icon: "☕",
    color: "bg-orange-500",
  },
  {
    name: "TypeScript",
    category: "language",
    level: 95,
    icon: "🔷",
    color: "bg-blue-500",
  },
  {
    name: "JavaScript",
    category: "language",
    level: 92,
    icon: "🟨",
    color: "bg-yellow-400",
  },
  {
    name: "Python",
    category: "language",
    level: 82,
    icon: "🐍",
    color: "bg-green-600",
  },
  {
    name: "React",
    category: "frontend",
    level: 95,
    icon: "⚛️",
    color: "bg-blue-400",
  },
  {
    name: "Angular",
    category: "frontend",
    level: 90,
    icon: "🅰️",
    color: "bg-red-500",
  },
  {
    name: "Vue.js",
    category: "frontend",
    level: 85,
    icon: "💚",
    color: "bg-green-400",
  },
  {
    name: "jQuery",
    category: "frontend",
    level: 80,
    icon: "💎",
    color: "bg-cyan-500",
  },
  {
    name: "ASP.NET Core",
    category: "backend",
    level: 98,
    icon: "🌐",
    color: "bg-purple-500",
  },
  {
    name: "Spring Boot",
    category: "backend",
    level: 92,
    icon: "🍃",
    color: "bg-green-500",
  },
  {
    name: "Spring MVC",
    category: "backend",
    level: 88,
    icon: "🌱",
    color: "bg-green-600",
  },
  {
    name: "Unity",
    category: "backend",
    level: 85,
    icon: "🎮",
    color: "bg-gray-700",
  },
  {
    name: "AWS",
    category: "cloud",
    level: 88,
    icon: "☁️",
    color: "bg-yellow-500",
  },
  {
    name: "Azure",
    category: "cloud",
    level: 95,
    icon: "🌤️",
    color: "bg-blue-600",
  },
  {
    name: "Docker",
    category: "cloud",
    level: 90,
    icon: "🐳",
    color: "bg-blue-400",
  },
];

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Z",
    company: "FPT",
    period: "2025 - Present",
    description:
      "Consulted on business solutions and digital marketing strategies for various clients, architecting scalable technology platforms to support modern marketing initiatives. My core responsibilities included designing microservices architectures using Azure Container Apps for marketing automation platforms, implementing feature-based frontend solutions with React 19/TypeScript for customer engagement portals, and developing clean hexagonal architecture patterns with ASP.NET Core 9.0 APIs for marketing data processing. I led technology stack decisions for digital marketing tools including Redux Toolkit for state management, Azure Communication Services for customer interaction systems, and Infrastructure as Code using Azure Bicep templates for scalable marketing infrastructure. Additionally, I established development standards for marketing analytics, implemented security-first design with Auth0 authentication for customer data protection, and created comprehensive DevOps strategies including CI/CD pipelines for rapid deployment of marketing campaigns and solutions.",
    technologies: [
      "C#",
      "ASP.NET Core",
      "TypeScript",
      "React",
      "Azure",
      "Docker",
    ],
    achievements: [
      "Reduced system latency by 40% through optimized architecture",
      "Implemented clean architecture using ASP.NET Core",
      "Led a team of 6 developers across 3 time zones",
    ],
    type: "enterprise",
    icon: "🏢",
  },
  {
    id: "2",
    title: "C",
    company: "FPT",
    period: "2022 - 2024",
    description:
      "Designed a scalable, modular architecture that integrates Unity-based frontend development with robust enterprise backend systems using C# .NET Framework and SQLite/Entity Framework. I led technology stack decisions, implemented SOLID principles, and ensured maintainable UI through the MVVM pattern. Additionally, I oversaw API design, system integration with external devices, and performance optimization for high-volume transaction environments while guiding development teams on best practices and architectural compliance.",
    technologies: ["C#", "Unity"],
    achievements: [
      "Migrated 15+ legacy applications to Azure",
      "Achieved 60% cost reduction in infrastructure",
      "Implemented zero-downtime deployment pipeline",
    ],
    type: "enterprise",
    icon: "🎮",
  },
  {
    id: "3",
    title: "S",
    company: "FPT",
    period: "2022 - 2023",
    description:
      "Designed the overall system architecture using a microservices-based approach with Spring Boot, Node.js, and AWS Lambda. I defined service boundaries, selected core technologies such as Angular for the frontend, MongoDB and MariaDB for databases, and AWS services (API Gateway, S3, ECS) for cloud infrastructure. I ensured the system's scalability, security, and maintainability by implementing best practices like JWT authentication, SAML2 SSO, and CI/CD pipelines using GitLab CI. Additionally, I collaborated with cross-functional teams to establish coding standards, created detailed architectural documentation, and provided technical leadership throughout the development lifecycle.",
    technologies: [
      "TypeScript",
      "Angular",
      "JavaScript",
      "Vue",
      "Java",
      "Spring Boot",
      "AWS",
      "Lambda",
      "Docker",
    ],
    achievements: [
      "Processed 1M+ events per second",
      "Created interactive dashboards for 50+ clients",
      "Reduced data processing time by 70%",
    ],
    type: "enterprise",
    icon: "⚡",
  },
  {
    id: "4",
    title: "R",
    company: "FPT",
    period: "2019 - 2021",
    description:
      "Developed and maintained scalable microservices using Java, Spring Boot, and AWS technologies (Lambda, API Gateway, ECS, RDS Aurora). I contributed to real-time data processing, API development, and seamless integration with mobile platforms (iOS/Android). Additionally, I ensured code quality, implemented CI/CD pipelines, and followed best practices for security and performance optimization.",
    technologies: ["Java", "Spring", "Docker", "Maven", "AWS"],
    achievements: [
      "Processed 50M+ transactions daily with 99.99% uptime",
      "Reduced API response time by 65% through optimization",
      "Successfully integrated with 15+ external payment systems",
    ],
    type: "enterprise",
    icon: "☁️",
  },
  {
    id: "5",
    title: "W",
    company: "FPT",
    period: "2017 - 2018",
    description:
      "Architected and developed a comprehensive workflow management system for application approval processes. Built a multi-platform solution using PC and smartphone interfaces for seamless application submission and approval workflows. The system features customizable application forms with various input types (text, numeric, date, radio buttons, checkboxes, dropdown, file attachments), multi-level approval routing, and automatic notification system via email and push notifications. Implemented integration capabilities with ERP systems for master data synchronization and expense management coordination. The platform supports template-based application forms and enables complex approval hierarchies with department, employee, and supervisor-based routing.",
    technologies: [
      "C#",
      "ASP.NET Core",
      "Java",
      "Android",
      "iOS",
      "TypeScript",
      "Angular",
      "SQL Server",
    ],
    achievements: [
      "Implemented multi-level approval routing with flexible hierarchy settings",
      "Achieved seamless PC and smartphone application/approval experience",
      "Successfully integrated with multiple ERP systems for data synchronization",
      "Reduced approval processing time by 50% through automated workflows",
    ],
    type: "enterprise",
    icon: "📋",
  },
  {
    id: "6",
    title: "M",
    company: "A+",
    period: "2016 - 2017",
    description:
      "Architected and developed a comprehensive defined contribution pension management application. Built a robust web platform using Java and Play Framework for backend services, with jQuery-powered frontend for dynamic user interactions. The system handles complex pension calculations, investment portfolio management, and regulatory compliance reporting. Implemented secure authentication, real-time data synchronization, and multilingual support (Japanese/English). The application serves thousands of users managing their retirement savings with features including contribution tracking, investment analysis, and personalized financial planning tools.",
    technologies: [
      "Java",
      "Play Framework",
      "jQuery",
      "PostgreSQL",
      "HTML5",
      "CSS3",
    ],
    achievements: [
      "Successfully processed 10,000+ pension accounts",
      "Achieved 99.9% uptime for critical financial operations",
      "Implemented Japanese regulatory compliance (JFSA standards)",
      "Reduced pension calculation processing time by 60%",
    ],
    type: "enterprise",
    icon: "💰",
  },
  {
    id: "7",
    title: "K",
    company: "FPT",
    period: "2014 - 2016",
    description:
      "Architected and developed a comprehensive cloud services management portal enabling companies to register, manage, and monitor their cloud services. The solution included a multi-tenant registration portal for companies to onboard cloud services, an administrative website for managing registered companies and their service information, and an intelligent monitoring system with automated email notifications for service errors. I led the technical architecture decisions, implemented Spring MVC-based backend with RESTful APIs, designed responsive frontend interfaces using Backbone.js for both customer and admin portals, and established comprehensive testing strategies including automated UI testing with Geb framework. Additionally, I managed code review processes and mentoring programs for development team members. The system featured role-based access control, service health dashboards, automated alerting mechanisms, and comprehensive audit logging.",
    technologies: [
      "Java",
      "Spring MVC",
      "JavaScript",
      "Backbone.js",
      "Geb",
      "Groovy",
      "PostgreSQL",
      "Couchbase",
      "HTML5",
      "CSS3",
      "Maven",
    ],
    achievements: [
      "Successfully onboarded 200+ companies with their cloud services",
      "Achieved 99.9% uptime for critical monitoring and notification systems",
      "Implemented comprehensive automation testing suite using Geb framework",
      "Led code reviews and mentored 8 developers on best practices",
    ],
    type: "enterprise",
    icon: "☁️",
  },
  {
    id: "8",
    title: "V",
    company: "VTC",
    period: "2012 - 2014",
    description:
      "Architected and developed a comprehensive online video streaming platform with advanced video processing capabilities. The system included custom video encoding tools for optimizing content delivery, automated web crawling tools for video content aggregation, and a scalable streaming infrastructure supporting thousands of concurrent users. I designed the load balancing architecture to distribute streaming traffic efficiently across multiple servers, implemented SSD-based storage solutions to handle high-volume video data and resolve storage bottlenecks, and established video transcoding pipelines for multi-format support. The platform featured adaptive bitrate streaming, real-time analytics, content management systems, and robust CDN integration for global content delivery.",
    technologies: [
      "Python",
      "Tornado",
      "FFmpeg",
      "JavaScript",
      "HTML5",
      "MySQL",
      "Memcached",
    ],
    achievements: [
      "Successfully streamed to 10,000+ concurrent users with minimal latency",
      "Implemented SSD storage solution reducing video load times by 75%",
      "Built automated video encoding pipeline processing 500+ hours daily",
      "Achieved 99.8% uptime through robust load balancing architecture",
    ],
    type: "enterprise",
    icon: "🎬",
  },
  {
    id: "9",
    title: "H",
    company: "H",
    period: "2011 - 2012",
    description:
      "Developed an advanced image authenticity verification system using Wavelet Transformation algorithms to detect digitally manipulated images. The application employed sophisticated mathematical analysis to identify artifacts and inconsistencies in digital images that indicate forgery or tampering. I implemented core wavelet decomposition algorithms, designed pattern recognition systems for detecting manipulation signatures, and created a user-friendly interface for forensic analysts and security professionals. The system featured batch processing capabilities, detailed analysis reports, and integration with existing digital forensics workflows. This research-based project contributed to digital security and media authentication technologies.",
    technologies: ["C#", "C++", "Paint.NET"],
    achievements: [
      "Achieved 95% accuracy in detecting digitally manipulated images",
      "Implemented custom wavelet transformation algorithms for forensic analysis",
      "Processed and analyzed 10,000+ images for validation and testing",
      "Published research findings on digital image authentication methods",
    ],
    type: "enterprise",
    icon: "🔍",
  },
];

const SA: React.FC<SAProps> = ({
  name = "Hieu Nguyen",
  title = "Senior Software Architect",
  // experience = "14+ Years Experience",
  location = "Hanoi, VN",
  email = "hieunv@live.com",
  linkedin = "linkedin.com/in/hieu-nv",
  github = "github.com/hieu-nv",
  avatar = "https://hieu-nv.github.io/images/avatar.jpg",
  skills = defaultSkills,
  projects = defaultProjects,
}) => {
  const getSkillsByCategory = (category: string) => {
    return skills.filter((skill) => skill.category === category);
  };

  // Debug: Log projects to console
  console.log("Projects:", projects);
  console.log("Projects length:", projects.length);

  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-slate-200 font-semibold flex items-center gap-3">
          <span className="text-xl">{skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-sm text-slate-300 font-bold bg-slate-800/50 px-2 py-1 rounded-full border border-slate-700/50">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-slate-800/50 rounded-full h-3 overflow-hidden border border-slate-700/30">
        <div
          className={`h-3 rounded-full transition-all duration-1000 ease-out shadow-lg ${skill.color} relative overflow-hidden`}
          style={{ width: `${skill.level}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-shimmer" />
        </div>
      </div>
    </div>
  );

  const ContactInfo: React.FC<{
    icon: string;
    text: string;
    href?: string;
  }> = ({ icon, text, href }) => (
    <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800/50 transition-all duration-300 group border border-transparent hover:border-blue-500/30">
      <span className="text-2xl">{icon}</span>
      {href ? (
        <a
          href={href}
          className="text-slate-300 hover:text-blue-400 transition-colors font-medium group-hover:underline"
        >
          {text}
        </a>
      ) : (
        <span className="text-slate-300 font-medium">{text}</span>
      )}
    </div>
  );

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({
    project,
  }) => {
    const getTypeColor = (type: Project["type"]) => {
      switch (type) {
        case "enterprise":
          return "from-blue-500 to-indigo-600";
        case "startup":
          return "from-green-500 to-emerald-600";
        case "consulting":
          return "from-purple-500 to-violet-600";
        case "open-source":
          return "from-orange-500 to-red-600";
        default:
          return "from-gray-500 to-gray-600";
      }
    };

    const getTypeLabel = (type: Project["type"]) => {
      switch (type) {
        case "enterprise":
          return "Enterprise";
        case "startup":
          return "Startup";
        case "consulting":
          return "Consulting";
        case "open-source":
          return "Open Source";
        default:
          return "Project";
      }
    };

    return (
      <div className="relative group">
        {/* Timeline Line with gradient */}
        <div className="absolute left-[31px] top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 opacity-50" />

        {/* Timeline Dot with pulse effect */}
        <div className="absolute left-6 top-[41px] w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-3 border-slate-900 shadow-xl shadow-blue-500/50 group-hover:scale-125 transition-transform duration-300 z-10">
          <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-40" />
        </div>

        {/* Project Card with futuristic glassmorphism */}
        <div className="ml-16 mb-10 timeline-project page-break-inside-avoid transform transition-all duration-300 hover:scale-[1.02]">
          <div className="relative group">
            {/* Neon glow border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
            
            <div className="relative bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-7 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden">
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-transparent to-purple-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated scan line effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-scan-line" />
              </div>

              <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-4">
                    <div className="text-4xl p-3 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                        {project.title}
                      </h4>
                      <p className="text-blue-400 text-sm font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                        {project.company}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getTypeColor(
                        project.type
                      )} shadow-lg hover:shadow-xl transition-shadow duration-300`}
                    >
                      {getTypeLabel(project.type)}
                    </span>
                    <p className="text-slate-400 text-sm mt-2 font-medium flex items-center justify-end gap-1">
                      <span className="text-xs">📅</span>
                      {project.period}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-5 p-4 bg-gradient-to-br from-slate-800/60 to-blue-950/30 backdrop-blur-sm rounded-xl border border-slate-700/30">
                  <p className="text-slate-300 text-sm leading-relaxed text-justify">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                    <span className="text-base">🛠️</span>
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-gradient-to-r from-slate-800/70 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 hover:border-blue-500/50 rounded-lg text-xs text-slate-200 font-semibold shadow-lg hover:shadow-blue-500/20 transition-all duration-200 hover:scale-105 hover:-translate-y-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full min-h-screen print-container bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* Futuristic Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-indigo-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/30 to-pink-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-bl from-cyan-500/20 to-blue-600/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-900/50 to-slate-950" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center py-16 p-8">
        <div className="max-w-7xl w-full grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          {/* Left Side - Profile Info */}
          <div className="space-y-10">
            {/* Header */}
            <div className="text-center xl:text-left">
              <div className="inline-block relative mb-8">
                <div className="relative">
                  {/* Neon glow ring */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 animate-pulse" />
                  <img
                    src={avatar}
                    alt={name}
                    className="relative w-50 h-50 rounded-full border-4 border-slate-800/50 shadow-2xl object-cover ring-2 ring-blue-500/50"
                  />
                  {/* Stats overlay badge with neon effect */}
                  {/* <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-xl border-4 border-slate-900 ring-2 ring-blue-400/50">
                    <div className="text-center w-16 h-16">
                      <div className="text-2xl font-bold leading-11">14+</div>
                      <div className="text-xs font-medium">Years</div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="space-y-3">
                <h1 className="text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight tracking-tight drop-shadow-lg">
                  {name}
                </h1>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {title}
                </h2>
                <div className="flex items-center justify-center xl:justify-start gap-2 text-slate-400">
                  <span>📍</span>
                  <span className="font-medium">{location}</span>
                </div>
              </div>
            </div>

            {/* Key Metrics - Futuristic Neon Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500" />
                <div className="relative bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 text-white shadow-xl hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl mb-2 font-bold bg-gradient-to-br from-blue-300 to-blue-500 bg-clip-text text-transparent">9</div>
                  <div className="text-sm font-semibold text-blue-200">Major Projects</div>
                  <div className="text-xs text-blue-300/70 mt-1">Enterprise Scale</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500" />
                <div className="relative bg-gradient-to-br from-purple-500/20 to-violet-600/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 text-white shadow-xl hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl mb-2 font-bold bg-gradient-to-br from-purple-300 to-purple-500 bg-clip-text text-transparent">16+</div>
                  <div className="text-sm font-semibold text-purple-200">Technologies</div>
                  <div className="text-xs text-purple-300/70 mt-1">Mastered</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500" />
                <div className="relative bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-xl border border-green-500/30 rounded-2xl p-6 text-white shadow-xl hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl mb-2 font-bold bg-gradient-to-br from-green-300 to-green-500 bg-clip-text text-transparent">5</div>
                  <div className="text-sm font-semibold text-green-200">Companies</div>
                  <div className="text-xs text-green-300/70 mt-1">FPT & Partners</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500" />
                <div className="relative bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-6 text-white shadow-xl hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl mb-2 font-bold bg-gradient-to-br from-orange-300 to-orange-500 bg-clip-text text-transparent">100%</div>
                  <div className="text-sm font-semibold text-orange-200">Success Rate</div>
                  <div className="text-xs text-orange-300/70 mt-1">Delivery</div>
                </div>
              </div>
            </div>

            {/* Contact Information - Glassmorphism Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-500" />
              <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-slate-700/50">
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6 flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  Contact Information
                </h3>
                <div className="grid gap-4">
                  <ContactInfo icon="📍" text={location} />
                  <ContactInfo icon="✉️" text={email} href={`mailto:${email}`} />
                  <ContactInfo
                    icon="💼"
                    text={linkedin}
                    href={`https://${linkedin}`}
                  />
                  <ContactInfo
                    icon="🐙"
                    text={github}
                    href={`https://${github}`}
                  />
                </div>
              </div>
            </div>

            {/* Professional Overview with Stats */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-500" />
              <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-slate-700/50">
                <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6 flex items-center gap-3">
                  <span className="text-2xl">👨‍💼</span>
                  Professional Overview
                </h3>
                
                {/* Key Highlights */}
                <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-gradient-to-r from-blue-950/50 to-indigo-950/50 rounded-xl border border-blue-500/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent">C#</div>
                    <div className="text-xs text-slate-400 font-medium mt-1">Primary</div>
                  </div>
                  <div className="text-center border-x border-slate-700">
                    <div className="text-3xl font-bold bg-gradient-to-br from-indigo-400 to-indigo-600 bg-clip-text text-transparent">Java</div>
                    <div className="text-xs text-slate-400 font-medium mt-1">Expert</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-br from-purple-400 to-purple-600 bg-clip-text text-transparent">Cloud</div>
                    <div className="text-xs text-slate-400 font-medium mt-1">Azure/AWS</div>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed text-justify">
                  "I am a seasoned Senior Software Architect with over 14 years of comprehensive experience in designing and implementing enterprise-scale solutions across diverse industries including digital marketing, fintech, gaming, video streaming, and cloud services. My expertise spans full-stack development, cloud architecture, and technical leadership, with proven success in consulting on business solutions and digital marketing strategies. I specialize in architecting scalable microservices, implementing modern frontend frameworks, and leading cross-functional development teams. Throughout my career, I have successfully delivered complex projects ranging from marketing automation platforms and pension management systems to video streaming platforms and image processing applications, consistently driving innovation while ensuring robust, maintainable, and high-performing solutions."
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Skills */}
          <div className="space-y-6">
            {/* Skills Header with Stats */}
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Technical Expertise
              </h3>
              <div className="flex items-center justify-center lg:justify-start gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
                  <span className="text-slate-400">16 Technologies</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-slate-400">92% Avg Proficiency</span>
                </div>
              </div>
            </div>

            {/* Programming Languages */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-blue-500/30 overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full"></div>
                
                <h4 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6 flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-xl shadow-lg shadow-blue-500/50">
                    👨‍💻
                  </div>
                  <div>
                    <div>Programming Languages</div>
                    <div className="text-xs font-normal text-slate-400">5 Languages Mastered</div>
                  </div>
                </h4>
                <div className="space-y-4 relative z-10">
                  {getSkillsByCategory("language").map((skill, index) => (
                    <SkillBar key={index} skill={skill} />
                  ))}
                </div>
              </div>
            </div>

            {/* Frontend Technologies */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-pink-500/30 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-bl-full"></div>
                
                <h4 className="text-lg font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-6 flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center text-white text-xl shadow-lg shadow-pink-500/50">
                    🎨
                  </div>
                  <div>
                    <div>Frontend Technologies</div>
                    <div className="text-xs font-normal text-slate-400">4 Frameworks</div>
                  </div>
                </h4>
                <div className="space-y-4 relative z-10">
                  {getSkillsByCategory("frontend").map((skill, index) => (
                    <SkillBar key={index} skill={skill} />
                  ))}
                </div>
              </div>
            </div>

            {/* Backend Technologies */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-purple-500/30 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full"></div>
                
                <h4 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-6 flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center text-white text-xl shadow-lg shadow-purple-500/50">
                    ⚙️
                  </div>
                  <div>
                    <div>Backend Technologies</div>
                    <div className="text-xs font-normal text-slate-400">4 Platforms</div>
                  </div>
                </h4>
                <div className="space-y-4 relative z-10">
                  {getSkillsByCategory("backend").map((skill, index) => (
                    <SkillBar key={index} skill={skill} />
                  ))}
                </div>
              </div>
            </div>

            {/* Cloud Technologies */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-cyan-500/30 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full"></div>
                
                <h4 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6 flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-xl shadow-lg shadow-cyan-500/50">
                    ☁️
                  </div>
                  <div>
                    <div>Cloud Technologies</div>
                    <div className="text-xs font-normal text-slate-400">3 Cloud Platforms</div>
                  </div>
                </h4>
                <div className="space-y-4 relative z-10">
                  {getSkillsByCategory("cloud").map((skill, index) => (
                    <SkillBar key={index} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 py-12 text-center">
        <div className="animate-bounce">
          <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg shadow-blue-500/50 ring-2 ring-blue-400/50">
            ⬇️
          </div>
          <p className="text-slate-300 text-lg font-medium">
            Explore Project Timeline
          </p>
        </div>
      </div>

      {/* Project Timeline Section */}
      <div className="relative z-10 py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-6xl">💼</span>
            </div>
            <h3 className="text-4xl font-bold mb-5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Project Timeline
            </h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              A showcase of key projects and achievements throughout my career
              as a software architect, highlighting technical leadership and
              innovative solutions.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
              <span className="text-blue-400 text-sm font-semibold">14+ Years of Excellence</span>
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
            </div>
          </div>

          <div className="relative">
            {projects && projects.length > 0 ? (
              projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
            ) : (
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-40" />
                <div className="relative text-slate-300 text-center p-8 bg-slate-900/60 backdrop-blur-xl rounded-2xl shadow-xl border border-red-500/30">
                  <p>No projects found. Check console for debugging info.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* <div className="absolute top-10 right-10 text-white/10 text-6xl animate-bounce">
        <span>⚡</span>
      </div>
      <div className="absolute bottom-10 left-10 text-white/10 text-4xl animate-pulse">
        <span>🚀</span>
      </div> */}
    </div>
  );
};

export default SA;
