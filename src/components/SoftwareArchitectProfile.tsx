import React from "react";
import LiquidGlass from "./LiquidGlass";

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
    name: "Java",
    category: "language",
    level: 95,
    icon: "☕",
    color: "bg-orange-500",
  },
  {
    name: "React",
    category: "frontend",
    level: 90,
    icon: "⚛️",
    color: "bg-blue-400",
  },
  {
    name: "Angular",
    category: "frontend",
    level: 85,
    icon: "🅰️",
    color: "bg-red-500",
  },
  {
    name: "ASP.NET Core",
    category: "backend",
    level: 88,
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
    name: "C#",
    category: "language",
    level: 92,
    icon: "#️⃣",
    color: "bg-indigo-500",
  },
  {
    name: "AWS",
    category: "cloud",
    level: 87,
    icon: "☁️",
    color: "bg-yellow-500",
  },
  {
    name: "Azure",
    category: "cloud",
    level: 83,
    icon: "🌤️",
    color: "bg-blue-600",
  },
];

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Enterprise E-Commerce Platform",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description:
      "Led the architecture and development of a scalable microservices-based e-commerce platform serving 2M+ users.",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
    achievements: [
      "Reduced system latency by 40% through optimized architecture",
      "Implemented event-driven architecture with 99.9% uptime",
      "Led team of 12 developers across 3 time zones",
    ],
    type: "enterprise",
    icon: "🛒",
  },
  {
    id: "2",
    title: "Cloud Migration Initiative",
    company: "Financial Services Inc",
    period: "2020 - 2022",
    description:
      "Architected and executed migration of legacy banking systems to cloud-native infrastructure.",
    technologies: ["C#", "ASP.NET Core", "Azure", "DevOps", "Terraform"],
    achievements: [
      "Migrated 15+ legacy applications to Azure",
      "Achieved 60% cost reduction in infrastructure",
      "Implemented zero-downtime deployment pipeline",
    ],
    type: "enterprise",
    icon: "☁️",
  },
  {
    id: "3",
    title: "Real-time Analytics Dashboard",
    company: "DataViz Startup",
    period: "2019 - 2020",
    description:
      "Built real-time data processing and visualization platform for IoT sensor networks.",
    technologies: ["Angular", "Java", "Apache Kafka", "ElasticSearch", "AWS"],
    achievements: [
      "Processed 1M+ events per second",
      "Created interactive dashboards for 50+ clients",
      "Reduced data processing time by 70%",
    ],
    type: "startup",
    icon: "📊",
  },
  {
    id: "4",
    title: "Open Source Framework",
    company: "Community Project",
    period: "2018 - 2019",
    description:
      "Developed and maintained popular open-source framework for microservices communication.",
    technologies: ["Java", "Spring", "Docker", "Maven", "GitHub Actions"],
    achievements: [
      "5K+ GitHub stars and 500+ contributors",
      "Adopted by 100+ companies worldwide",
      "Featured in major tech conferences",
    ],
    type: "open-source",
    icon: "🔧",
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
    index,
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
        {index !== projects.length - 1 && (
          <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-400 opacity-30" />
        )}

        {/* Timeline Dot */}
        <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-slate-900 shadow-lg" />

        {/* Project Card */}
        <div className="ml-16 mb-8">
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
                <div className="text-right">
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
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <h5 className="text-sm font-medium text-white/80 mb-2">
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
                <h5 className="text-sm font-medium text-white/80 mb-2">
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
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
                  className="w-32 h-32 rounded-full border-4 border-white/20 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
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
                  "Building scalable, resilient systems that bridge business
                  needs with technical excellence. Passionate about clean
                  architecture, microservices, and cloud-native solutions that
                  deliver exceptional user experiences while maintaining
                  operational efficiency."
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
      <div className="relative z-10 py-16 px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Project History Timeline
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
