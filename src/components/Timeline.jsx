import ExperienceShowcase from "./Experience";

export default function Timeline() {
  const experience = [
    {
      type: "work",
      title: "Web Designer",
      organization: "Freelance",
      dateRange: "Mar 2024 - Present",
      description:
        "Developed and maintained web applications using React, Node.js, and MongoDB to deliver high-quality websites.",
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
      title: "Bachelor's in Integrative Studies",
      organization: "University of Central Florida",
      dateRange: "Aug 2018 - Dec 2022",
      description:
        "Completed a 4-year program with a focus on software development, data structures, and algorithms. Graduated with 117 Computer Science credits. Minor in Computer Science.",
    },
    {
      type: "work",
      title: "Software Engineer Intern",
      organization: "Lockheed Martin",
      dateRange: "Jun 2021 - Feb 2022",
      description:
        "Create new features and troubleshoot bugs using manual and automated testing tools.",
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
