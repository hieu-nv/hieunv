import React from "react";
import "../styles/print.css";

interface Employment {
  title: string;
  company: string;
  period: string;
  context?: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

interface SAProps {
  name?: string;
  title?: string;
  location?: string;
  email?: string;
  linkedin?: string;
  github?: string;
}

const employment: Employment[] = [
  {
    title: "Senior Software Engineer",
    company: "FPT",
    period: "06/2017 - Present",
    context: "Client-confidential outsourcing engagements",
    summary:
      "Deliver software engineering work for outsourcing engagements under client confidentiality obligations.",
    achievements: [
      "Contribute to architecture and implementation across backend, frontend, and cloud systems.",
      "Support performance optimization, code review, CI/CD delivery, mentoring, and cross-team coordination.",
    ],
    technologies: [
      "C#",
      "ASP.NET Core",
      "Java",
      "Spring Boot",
      "TypeScript",
      "React",
      "Angular",
      "Azure",
      "AWS",
      "Docker",
    ],
  },
  {
    title: "Software Engineer",
    company: "A+",
    period: "05/2016 - 05/2017",
    context: "Client-confidential outsourcing engagement",
    summary:
      "Delivered Java application development for an outsourcing engagement under client confidentiality obligations.",
    achievements: [
      "Developed and maintained application features using Java, Play Framework, PostgreSQL, and jQuery.",
      "Implemented application logic, data access, and user-interface changes within the established codebase.",
    ],
    technologies: ["Java", "Play Framework", "PostgreSQL", "jQuery"],
  },
  {
    title: "Software Engineer",
    company: "FPT",
    period: "06/2014 - 05/2016",
    context: "Client-confidential outsourcing engagements",
    summary:
      "Delivered Java web application development for outsourcing engagements under client confidentiality obligations.",
    achievements: [
      "Developed and maintained Java web applications using Spring MVC and PostgreSQL.",
      "Implemented frontend features and automated tests using Backbone.js and Geb.",
    ],
    technologies: [
      "Java",
      "Spring MVC",
      "Backbone.js",
      "PostgreSQL",
      "Couchbase",
      "Geb",
    ],
  },
  {
    title: "Software Engineer",
    company: "VTC",
    period: "07/2012 - 05/2014",
    summary:
      "Developed an online video streaming platform with encoding, content crawling, load balancing, SSD storage, transcoding, analytics, and CDN integration.",
    achievements: [
      "Streamed to 10,000+ concurrent users with minimal latency and maintained 99.8% uptime.",
      "Reduced video load times by 75% and built an encoding pipeline processing 500+ hours daily.",
    ],
    technologies: [
      "Python",
      "Tornado",
      "FFmpeg",
      "JavaScript",
      "MySQL",
      "Memcached",
    ],
  },
  {
    title: "Software Engineer",
    company: "Hong Hai Tech JSC",
    period: "06/2011 - 06/2012",
    summary:
      "Developed an image verification system using Wavelet Transformation algorithms to detect digitally manipulated images.",
    achievements: [
      "Developed and tested image-processing functionality using C# and C++.",
      "Implemented and tested algorithms for image analysis.",
    ],
    technologies: ["C#", "C++"],
  },
];

const expertise = [
  {
    label: "Core engineering",
    items: "C#, Java, TypeScript, ASP.NET Core, Spring Boot",
  },
  {
    label: "Cloud & distributed systems",
    items: "Azure, AWS, microservices, REST APIs, Docker",
  },
  {
    label: "Frontend",
    items: "React, Angular",
  },
  {
    label: "Delivery & leadership",
    items: "CI/CD, GitLab CI, Azure Bicep, code review, mentoring",
  },
];

const SA: React.FC<SAProps> = ({
  name = "Hieu Nguyen",
  title = "Senior Software Engineer",
  location = "Hanoi, VN",
  email = "hieunv@live.com",
  linkedin = "linkedin.com/in/hieu-nv",
  github = "github.com/hieu-nv",
}) => {
  return (
    <main className="min-h-screen bg-[#f3f1eb] text-[#17202a] print-container">
      <header className="border-b border-[#d7d2c7] bg-[#0d2636] text-white">
        <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#e6b85c]">
            Backend Systems · Cloud Platforms · Engineering Leadership
          </p>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h1 className="text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
                {name}
              </h1>
              <h2 className="mt-3 text-xl font-medium text-[#cbd5da] md:text-2xl">
                {title}
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-7 text-[#dce3e6] md:text-lg">
                Senior Software Engineer with 14+ years delivering backend,
                cloud, and enterprise platforms in C#, Java, TypeScript, Azure,
                and AWS. Focused on distributed-system performance, cloud
                modernization, hands-on delivery, and engineering leadership.
              </p>
            </div>

            <address className="not-italic text-sm leading-7 text-[#dce3e6] lg:text-right">
              <div>{location}</div>
              <a
                className="block hover:text-[#e6b85c]"
                href={`mailto:${email}`}
              >
                {email}
              </a>
              <a
                className="block hover:text-[#e6b85c]"
                href={`https://${linkedin}`}
              >
                {linkedin}
              </a>
              <a
                className="block hover:text-[#e6b85c]"
                href={`https://${github}`}
              >
                {github}
              </a>
            </address>
          </div>

        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-12 md:px-10 lg:grid-cols-[minmax(0,1fr)_17rem] lg:py-16">
        <section aria-labelledby="experience-heading">
          <div className="mb-8 flex items-center gap-4">
            <h2
              id="experience-heading"
              className="text-2xl font-semibold tracking-[-0.02em] text-[#0d2636]"
            >
              Professional Experience
            </h2>
            <div className="h-px flex-1 bg-[#d7d2c7]" />
          </div>

          <div className="space-y-10">
            {employment.map((job) => (
              <article
                className="page-break-inside-avoid border-l-2 border-[#d7d2c7] pl-5 md:pl-7"
                key={`${job.company}-${job.period}-${job.title}`}
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-semibold text-[#0d2636]">
                    {job.title} · {job.company}
                  </h3>
                  <p className="shrink-0 text-sm font-semibold text-[#6d6254]">
                    {job.period}
                  </p>
                </div>
                <p className="mt-4 leading-7 text-[#46515a]">
                  {job.summary}
                </p>
                {job.context && (
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#8a5c1d]">
                    {job.context}
                  </p>
                )}
                {job.achievements.length > 0 && (
                  <ul className="mt-4 space-y-2.5 text-[#27343d]">
                    {job.achievements.map((achievement) => (
                      <li className="flex gap-3 leading-6" key={achievement}>
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b67924]"
                        />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-wide text-[#726858]">
                  {job.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="space-y-10 lg:border-l lg:border-[#d7d2c7] lg:pl-8">
          <section aria-labelledby="expertise-heading">
            <h2
              id="expertise-heading"
              className="border-b border-[#d7d2c7] pb-3 text-lg font-semibold text-[#0d2636]"
            >
              Technical Expertise
            </h2>
            <dl className="mt-5 space-y-6">
              {expertise.map((group) => (
                <div key={group.label}>
                  <dt className="text-sm font-semibold text-[#0d2636]">
                    {group.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-[#58636a]">
                    {group.items}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </aside>
      </div>
    </main>
  );
};

export default SA;
