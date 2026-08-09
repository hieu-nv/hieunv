import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import SA from "./SA";

const renderProfile = () => renderToStaticMarkup(<SA />);

describe("senior software engineer CV", () => {
  it("positions the candidate as a senior software engineer", () => {
    const profile = renderProfile();

    expect(profile).toContain("Senior Software Engineer");
    expect(profile).toContain(
      "Backend Systems · Cloud Platforms · Engineering Leadership",
    );
    expect(profile).not.toContain(
      "Software Engineering · Full-Stack Development · Cloud",
    );
    expect(profile).not.toContain(">Senior Software Architect<");
  });

  it("keeps confidential outsourcing engagements client-safe", () => {
    const profile = renderProfile();

    expect(profile).toContain("Client-confidential outsourcing engagements");
    expect(profile).not.toContain("Digital marketing platform");
    expect(profile).not.toContain("Enterprise data platform");
    expect(profile).not.toContain("AWS microservices platform");
    expect(profile).not.toContain("defined-contribution pension");
    expect(profile).not.toContain("JFSA");
    expect(profile).not.toContain("multi-tenant portal");
    expect(profile).not.toContain("Onboarded 200+ companies");
    expect(profile).not.toContain("Recorded scale");
    expect(profile).not.toContain("50M+/day");
  });

  it("adds general responsibilities without exposing client details", () => {
    const profile = renderProfile();

    expect(profile).toContain(
      "Developed and maintained application features using Java, Play Framework, PostgreSQL, and jQuery",
    );
    expect(profile).toContain(
      "Developed and maintained Java web applications using Spring MVC and PostgreSQL",
    );
    expect(profile).toContain(
      "Developed and tested image-processing functionality using C# and C++",
    );
  });

  it("leads with verified professional experience", () => {
    const profile = renderProfile();

    expect(profile).toContain("Professional Experience");
    expect(profile).toContain("Software Engineer · FPT");
    expect(profile).toContain("06/2017 - Present");
    expect(profile).toContain("Software Engineer · A+");
    expect(profile).toContain("05/2016 - 05/2017");
    expect(profile).toContain("Software Engineer · VTC");
    expect(profile).toContain("Software Engineer · Hong Hai Tech JSC");
    expect(profile).toContain("06/2011 - 06/2012");
    expect(profile).toContain("Core engineering");
    expect(profile).not.toContain("Selected Results");
    expect(profile).not.toContain("Vue.js");
    expect(profile).not.toContain("Image Authenticity Verification");
    expect(profile.match(/<article/g) ?? []).toHaveLength(5);
  });

  it("does not invent employment titles that were absent from the source", () => {
    const profile = renderProfile();

    expect(profile).not.toContain("Senior Software Architect · FPT");
    expect(profile).not.toContain("Software Architect · FPT");
    expect(profile).not.toContain("Senior Software Engineer · A+");
    expect(profile).not.toContain("Technical Lead · FPT");
  });

  it("retains only non-confidential evidence from disclosed roles", () => {
    const profile = renderProfile();

    expect(profile).toContain("10,000+ concurrent users");
    expect(profile).not.toContain("Reduced system latency by 40%");
    expect(profile).not.toContain("60% cost reduction");
    expect(profile).not.toContain("1M+ events per second");
    expect(profile).not.toContain("50M+ transactions daily");
  });

  it("removes low-relevance claims that lack supporting context", () => {
    const profile = renderProfile();

    expect(profile).not.toContain("published research findings");
    expect(profile).not.toContain("95% detection accuracy");
  });

  it("does not use unverifiable self-ratings or vanity claims", () => {
    const profile = renderProfile();

    expect(profile).not.toContain("100% Success Rate");
    expect(profile).not.toContain("Avg Proficiency");
    expect(profile).not.toMatch(/>(?:80|82|85|88|90|92|95|98)%</);
  });

  it("does not expose unfinished recruiter-facing placeholders", () => {
    expect(renderProfile()).not.toContain("Add degree");
  });

  it("uses senior software engineer branding across supporting surfaces", () => {
    const supportingContent = [
      "./ComponentShowcase.tsx",
      "../docs/PDF_GENERATION_GUIDE.md",
      "../../scripts/generate-pdf.js",
    ]
      .map((path) => readFileSync(new URL(path, import.meta.url), "utf8"))
      .join("\n");

    expect(supportingContent).not.toContain("Software Architect Profile");
    expect(supportingContent).not.toContain(
      "Hieu_Nguyen_Software_Architect_Profile",
    );
  });

  it("uses a clean white print surface", () => {
    const printStyles = readFileSync(
      new URL("../styles/print.css", import.meta.url),
      "utf8",
    );

    expect(printStyles).toContain("background: #fff !important");
    expect(printStyles).not.toContain("#581c87");
  });
});
