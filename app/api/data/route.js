export async function GET() {
  return Response.json({
    education: [
      {
        id: 1,
        school: "Bulacan State University",
        course: "Bachelor of Science in Information Technology",
        dates: "2019 - 2023",
        logo: "/asset/image/bulsu.png",
        achievements: [
          "Graduated Cum Laude, demonstrating consistent academic excellence",
          "Achieved Dean’s Lister status from 2020 to 2023 for outstanding performance each semester"
        ],
        modalKey: "BulSUModal"
      },
      {
        id: 2,
        school: "St. Martin de Porres",
        course: "Accountancy, Business and Management",
        dates: "2017 - 2019",
        logo: "/asset/image/SMPCS.png",
        achievements: [
          "Maintained Honor Student status across all academic years",
          "Graduated with honors, demonstrating dedication and strong academic achievement"
        ],
        modalKey: "SMPCSModal"
      }
    ],
    experience: [
      {
        id: 1,
        company: "Emerson Electric Asia",
        role: "IT Service Delivery Analyst",
        dates: "2024 - 2026",
        exactDate: "October 2024 - January 2026",
        logo: "/asset/image/Emerson.png",
        responsibilities: [
          "Developed and implemented the IT Receiving Asset System (web-based)",
          "Provided hardware support and troubleshooting for end-users",
          "Managed ticketing system for IT service requests",
          "Resolved account-related issues and access concerns",
          "Handled parts replacement and asset lifecycle management"
        ],
        modalKey: "EmersonModal"
      },
      {
        id: 2,
        company: "Tsukiden Global Solutions Inc.",
        role: "Design Engineer I",
        dates: "2023 - 2024",
        exactDate: "August 2024 - August 2024",
        logo: "/asset/image/Tsukiden.png",
        responsibilities: [
          "Developed and maintained responsive web applications using React, JavaScript, and Bootstrap",
          "Collaborated with designers and back-end developers to implement UI/UX improvements",
          "Optimized application performance and ensured cross-browser compatibility",
          "Worked on integrating design consistency across projects"
        ],
        modalKey: "TsukidenModal"
      },
      {
        id: 3,
        company: "Code Mechanics",
        role: "Junior Front-End Developer",
        dates: "2021 - 2022",
        exactDate: "October 2021 - December 2022",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Behance_logo.svg",
        responsibilities: [
          "Built responsive, user-friendly web interfaces with a focus on UX and performance",
          "Developed reusable front-end components for scalability",
          "Optimized pages for speed and efficiency",
          "Maintained brand consistency across design implementations"
        ],
        modalKey: "CodeMechanicsModal"
      }
    ],
    skills: {
      frontend: [
        { name: "HTML5", level: "Advanced", iconKey: "FaHtml5" },
        { name: "CSS3", level: "Advanced", iconKey: "FaCss3Alt" },
        { name: "JavaScript", level: "Proficient", iconKey: "FaJs" },
        { name: "React", level: "Advanced", iconKey: "FaReact" },
        { name: "Next.js", level: "Proficient", iconKey: "SiNextdotjs" },
        { name: "Bootstrap", level: "Proficient", iconKey: "FaBootstrap" }
      ],
      tools: [
        { name: "GitHub", level: "Proficient", iconKey: "FaGithub" },
        { name: "Postman", level: "Proficient", iconKey: "SiPostman" },
        { name: "ServiceNow", level: "Proficient", iconKey: "SiServicenow" },
        { name: "VS Code", level: "Proficient", iconKey: "FaCode" }
      ],
      design: [
        { name: "Figma", level: "Proficient", iconKey: "FaFigma" }
      ],
      softSkills: [
        "Responsive Design",
        "UI/UX Fundamentals",
        "Iterative Problem Solving",
        "Attention to Detail",
        "Collaboration & Communication",
        "Brand Consistency",
        "Troubleshooting & IT Support"
      ]
    }
  });
}
