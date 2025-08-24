import React from "react";
import LiquidGlass from "./LiquidGlass";
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

interface SoftwareArchitectProfileProps {
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
    level: 90,
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
    level: 85,
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
    level: 88,
    icon: "🅰️",
    color: "bg-red-500",
  },
  {
    name: "Vue.js",
    category: "frontend",
    level: 82,
    icon: "💚",
    color: "bg-green-400",
  },
  {
    name: "ASP.NET Core",
    category: "backend",
    level: 95,
    icon: "🌐",
    color: "bg-purple-500",
  },
  {
    name: "Spring Boot",
    category: "backend",
    level: 88,
    icon: "🍃",
    color: "bg-green-500",
  },
  {
    name: "Spring MVC",
    category: "backend",
    level: 85,
    icon: "🌱",
    color: "bg-green-600",
  },
  {
    name: "AWS",
    category: "cloud",
    level: 85,
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
];

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Z",
    company: "FPT",
    period: "2025 - Present",
    description:
      "Designed and implemented a modern, scalable multi-platform solution providing rental guarantee and communication services. My core responsibilities included architecting microservices using Azure Container Apps, designing feature-based frontend architecture with React 19/TypeScript, and implementing clean hexagonal architecture patterns with ASP.NET Core 9.0 APIs. I led technology stack decisions including Redux Toolkit for state management, Azure Communication Services for real-time chat, and Infrastructure as Code using Azure Bicep templates. Additionally, I established development standards for type safety, security-first design with Auth0 authentication, and comprehensive DevOps strategies including CI/CD pipelines and multi-environment deployments. My role ensured the system maintained enterprise-grade scalability, performance optimization, and WCAG 2.1 AA accessibility compliance across all applications.",
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

const SoftwareArchitectProfile: React.FC<SoftwareArchitectProfileProps> = ({
  name = "Hieu Nguyen",
  title = "Senior Software Architect",
  experience = "14+ Years Experience",
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
    <div className="mb-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-white/90 flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-xs text-white/70 font-medium">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out shadow-sm`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  const ContactInfo: React.FC<{
    icon: string;
    text: string;
    href?: string;
  }> = ({ icon, text, href }) => (
    <div className="flex items-center gap-2 mb-2 relative z-10">
      <span className="text-blue-400 text-lg">{icon}</span>
      {href ? (
        <a
          href={href}
          className="text-sm text-white/90 hover:text-blue-300 transition-colors font-medium"
        >
          {text}
        </a>
      ) : (
        <span className="text-sm text-white/80 font-medium">{text}</span>
      )}
    </div>
  );

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({
    project,
  }) => {
    const getTypeColor = (type: Project["type"]) => {
      switch (type) {
        case "enterprise":
          return "bg-blue-500";
        case "startup":
          return "bg-green-500";
        case "consulting":
          return "bg-purple-500";
        case "open-source":
          return "bg-orange-500";
        default:
          return "bg-gray-500";
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
      <div className="relative">
        {/* Timeline Line */}

        <div className="absolute left-[31px] top-0 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-400 opacity-30" />

        {/* Timeline Dot */}
        <div className="absolute left-6 top-[41px] w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-slate-900 shadow-lg" />

        {/* Project Card */}
        <div className="ml-16 mb-8 timeline-project page-break-inside-avoid">
          <div className="relative rounded-2xl overflow-hidden">
            {/* Liquid Glass Background */}
            <div className="absolute inset-0 z-0">
              <LiquidGlass
                width={400}
                height={200}
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  borderRadius: "16px",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Content overlay */}
            <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {project.title}
                    </h4>
                    <p className="text-blue-300 text-sm font-medium">
                      {project.company}
                    </p>
                  </div>
                </div>
                <div className="text-right h-12">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(
                      project.type
                    )}`}
                  >
                    {getTypeLabel(project.type)}
                  </span>
                  <p className="text-purple-300 text-sm mt-1">
                    {project.period}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/90 text-sm leading-relaxed mb-4 text-justify">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <h5 className="text-sm font-medium text-white/80 mb-2 text-left">
                  Technologies Used:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/20 rounded-md text-xs text-white/90 font-medium backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h5 className="text-sm font-medium text-white/80 mb-2 text-left">
                  Key Achievements:
                </h5>
                <ul className="space-y-1">
                  {project.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="text-xs text-white/80 flex items-start gap-2"
                    >
                      <span className="text-green-400 mt-0.5">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full min-h-screen print-container">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }, (_, i) => (
            <div key={i} className="border border-white/20" />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center py-16 p-8">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Info */}
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center lg:text-left">
              <div className="inline-block relative mb-6">
                <img
                  src={avatar}
                  alt={name}
                  className="w-32 h-32 lead rounded-full border-4 border-white/20 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-normal">
                {name}
              </h1>
              <h2 className="text-xl text-blue-300 mb-2">{title}</h2>
              <p className="text-purple-300 font-medium">{experience}</p>
            </div>

            {/* Contact Information with Liquid Glass Background */}
            <div className="relative rounded-2xl overflow-hidden">
              {/* Liquid Glass Background */}
              <div className="absolute inset-0 z-0">
                <LiquidGlass
                  width={400}
                  height={200}
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    borderRadius: "16px",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Content overlay */}
              <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-blue-400">📧</span>
                  Contact Information
                </h3>
                <div className="space-y-2">
                  <ContactInfo icon="📍" text={location} />
                  <ContactInfo
                    icon="✉️"
                    text={email}
                    href={`mailto:${email}`}
                  />
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

            {/* Architecture Philosophy with Liquid Glass Background */}
            <div className="relative rounded-2xl overflow-hidden">
              {/* Liquid Glass Background */}
              <div className="absolute inset-0 z-0">
                <LiquidGlass
                  width={400}
                  height={180}
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    borderRadius: "16px",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Content overlay */}
              <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-purple-400">🏗️</span>
                  Architecture Philosophy
                </h3>
                <p className="text-white/90 text-sm leading-relaxed font-medium text-left">
                  "With over 13 years of experience spanning enterprise
                  applications, cloud platforms, and cutting-edge technologies,
                  I architect solutions that balance innovation with pragmatism.
                  My approach centers on domain-driven design, polyglot
                  persistence, and technology-agnostic patterns that adapt to
                  evolving business needs. From video streaming platforms and
                  image processing systems to modern microservices and
                  AI-enhanced applications, I believe in building robust,
                  scalable architectures that not only solve today's challenges
                  but anticipate tomorrow's opportunities. Every system I design
                  prioritizes maintainability, performance, and the developer
                  experience that drives long-term success."
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white text-center lg:text-left mb-8">
              Technical Expertise
            </h3>

            {/* Programming Languages with Liquid Glass Background */}
            <div className="relative rounded-2xl overflow-hidden">
              {/* Liquid Glass Background */}
              <div className="absolute inset-0 z-0">
                <LiquidGlass
                  width={400}
                  height={160}
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    borderRadius: "16px",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Content overlay */}
              <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-yellow-400">👨‍💻</span>
                  Programming Languages
                </h4>
                {getSkillsByCategory("language").map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>

            {/* Frontend Technologies */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-blue-400">🎨</span>
                Frontend Technologies
              </h4>
              {getSkillsByCategory("frontend").map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>

            {/* Backend Technologies */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-green-400">⚙️</span>
                Backend Technologies
              </h4>
              {getSkillsByCategory("backend").map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>

            {/* Cloud Infrastructure */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-cyan-400">☁️</span>
                Cloud Infrastructure
              </h4>
              {getSkillsByCategory("cloud").map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 py-8 text-center">
        <div className="animate-bounce">
          <span className="text-white/50 text-2xl">⬇️</span>
          <p className="text-white/70 text-sm mt-2">
            Scroll down for Project Timeline
          </p>
        </div>
      </div>

      {/* Project Timeline Section */}
      <div className="relative z-10 py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              A showcase of key projects and achievements throughout my career
              as a software architect, highlighting technical leadership and
              innovative solutions.
            </p>
          </div>

          <div className="relative">
            {projects && projects.length > 0 ? (
              projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
            ) : (
              <div className="text-white text-center p-8">
                <p>No projects found. Check console for debugging info.</p>
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

export default SoftwareArchitectProfile;
