import ExperienceShowcase from "./Experience";

export default function Timeline() {
  const experience = [
    {
      type: "education",
      title: "M.S. Robotics & Autonomous Systems",
      organization: "University of Central Florida",
      dateRange: "Started Jan 2026",
      description:
        "Accepted into UCF's Robotics and Autonomous Systems Masters program.",
    },
    {
      type: "work",
      title: "Technical Support Engineer - Automation",
      organization: "ServiceNow",
      dateRange: "Sep 2025 - Present",
      description:
        "Focus on supporting customers by troubleshooting the ServiceNow platform related to authentication (LDAP/SSO), web services (SOAP/REST), data extraction (JDBC), integrations, scripting, networking, relational databases, and log analysis.",
      highlight: `★ Certified System Administrator ★`,
      highlightUrl: "https://www.credly.com/badges/8cb66e4b-3e09-4676-a312-4fba67e2af26/linked_in_profile",

    },
    {
      type: "work",
      title: "Application Developer II",
      organization: "University of Central Florida",
      dateRange: "Jan 2025 - Oct 2025",
      description:
        "Using PeopleCode, SQL, SQR, Java and other Oracle PeopleSoft tools optimizing PL/SQL queries ensuring data integrity and design new features, perform manual testing and report generation, and troubleshoot PeopleSoft CS.",
    },
    {
      type: "work",
      title: "Full-Stack Developer",
      organization: "Freelance",
      dateRange: "Mar 2024 - Present",
      description:
        "Developed and maintained web applications using Angular, React, MongoDB, PHP, AWS, Three.js to deliver high-quality websites. Offering SEO and Speed Optimization with Google Analytics support.",
    },
    {
      type: "work",
      title: "Programmer I",
      organization: "Daytona State College",
      dateRange: "Mar 2023 - Mar 2024",
      description:
        "Develop new and enhance existing applications using PeopleCode, SQL, Java, other Oracle PeopleSoft tools, manage backend systems, and create related technical documentation.",
    },
    {
      type: "education",
      title: "Bachelor's of Integrative Studies",
      organization: "University of Central Florida",
      dateRange: "Aug 2018 - Dec 2022",
      description: `4-year degree with a focus on Computer Science principles such as: data structures/algorithms, web design, and optimization.`,
      highlight: `Minor in Computer Science`,
    },
    {
      type: "work",
      title: "Software Engineer Intern",
      organization: "Lockheed Martin",
      dateRange: "Jun 2021 - Feb 2022",
      description:
        "Used Unity3D for practical simulations to create new features, troubleshoot bugs, and perform automated/manual testing.",
    },
    {
      type: "work",
      title: "Tech Lead",
      organization: "University of Central Florida",
      dateRange: "Sep 2019 - Jun 2021",
      description:
        "Led teams to construct different technical event setups following safety protocols. Setting up of computers, cables, lighting, and audio.",
    },
  ];

  return (
    <>
      <div className="pt-4 pb-8 bg-gradient flex items-center justify-center border-b border-neutral-800">
        <ExperienceShowcase experience={experience} />
      </div>
    </>
  );
}
