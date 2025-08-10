import React from 'react';
import LiquidGlass from './LiquidGlass';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'language';
  level: number; // 1-100
  icon: string;
  color: string;
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
}

const defaultSkills: Skill[] = [
  { name: 'Java', category: 'language', level: 95, icon: '☕', color: 'bg-orange-500' },
  { name: 'React', category: 'frontend', level: 90, icon: '⚛️', color: 'bg-blue-400' },
  { name: 'Angular', category: 'frontend', level: 85, icon: '🅰️', color: 'bg-red-500' },
  { name: 'ASP.NET Core', category: 'backend', level: 88, icon: '🌐', color: 'bg-purple-500' },
  { name: 'Spring Boot', category: 'backend', level: 92, icon: '🍃', color: 'bg-green-500' },
  { name: 'C#', category: 'language', level: 92, icon: '#️⃣', color: 'bg-indigo-500' },
  { name: 'AWS', category: 'cloud', level: 87, icon: '☁️', color: 'bg-yellow-500' },
  { name: 'Azure', category: 'cloud', level: 83, icon: '🌤️', color: 'bg-blue-600' },
];

const SoftwareArchitectProfile: React.FC<SoftwareArchitectProfileProps> = ({
  name = "Hieu Nguyen",
  title = "Senior Software Architect",
  experience = "14+ Years Experience",
  location = "Hanoi, VN",
  email = "hieunv@live.com",
  linkedin = "linkedin.com/in/hieu-nv",
  github = "github.com/hieu-nv",
  avatar = "/public/images/avatar.jpg",
  skills = defaultSkills
}) => {
  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-white/90 flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-xs text-white/70 font-medium">{skill.level}%</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out shadow-sm`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  const ContactInfo: React.FC<{ icon: string; text: string; href?: string }> = ({ icon, text, href }) => (
    <div className="flex items-center gap-2 mb-2 relative z-10">
      <span className="text-blue-400 text-lg">{icon}</span>
      {href ? (
        <a href={href} className="text-sm text-white/90 hover:text-blue-300 transition-colors font-medium">
          {text}
        </a>
      ) : (
        <span className="text-sm text-white/80 font-medium">{text}</span>
      )}
    </div>
  );

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }, (_, i) => (
            <div key={i} className="border border-white/20" />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
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
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px',
                    pointerEvents: 'none'
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
                  <ContactInfo icon="✉️" text={email} href={`mailto:${email}`} />
                  <ContactInfo icon="💼" text={linkedin} href={`https://${linkedin}`} />
                  <ContactInfo icon="🐙" text={github} href={`https://${github}`} />
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
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px',
                    pointerEvents: 'none'
                  }}
                />
              </div>
              
              {/* Content overlay */}
              <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-purple-400">🏗️</span>
                  Architecture Philosophy
                </h3>
                <p className="text-white/90 text-sm leading-relaxed font-medium">
                  "Building scalable, resilient systems that bridge business needs with technical excellence. 
                  Passionate about clean architecture, microservices, and cloud-native solutions that deliver 
                  exceptional user experiences while maintaining operational efficiency."
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
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px',
                    pointerEvents: 'none'
                  }}
                />
              </div>
              
              {/* Content overlay */}
              <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-yellow-400">👨‍💻</span>
                  Programming Languages
                </h4>
                {getSkillsByCategory('language').map((skill, index) => (
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
              {getSkillsByCategory('frontend').map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>

            {/* Backend Technologies */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-green-400">⚙️</span>
                Backend Technologies
              </h4>
              {getSkillsByCategory('backend').map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>

            {/* Cloud Infrastructure */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-cyan-400">☁️</span>
                Cloud Infrastructure
              </h4>
              {getSkillsByCategory('cloud').map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Liquid Glass Effect */}
      {/* <LiquidGlass 
        width={350} 
        height={220}
        style={{
          borderRadius: '30px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 -10px 25px inset rgba(255, 255, 255, 0.1)'
        }}
      /> */}

      {/* Floating Action Button */}
      {/* <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl">
          <span className="text-xl">💬</span>
        </button>
      </div> */}

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 text-white/10 text-6xl animate-bounce">
        <span>⚡</span>
      </div>
      <div className="absolute bottom-10 left-10 text-white/10 text-4xl animate-pulse">
        <span>🚀</span>
      </div>
    </div>
  );
};

export default SoftwareArchitectProfile;
