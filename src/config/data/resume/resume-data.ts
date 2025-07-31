
export const resumeData = {
  personal: {
    name: "Vukosi Moyane",
    title: "Fullstack .NET Developer",
    image: "assets/images/headshot.jpg",
    location: "Cape Town, South Africa",
    email: "vukosi90@gmail.com",
    phone: "+27 60 340 7771",
    social: [
      {
        platform: "github",
        url: "https://github.com/thefirsthero",
        handle: "@thefirsthero",
      },
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/vukosimoyane/",
        handle: "vukosimoyane",
      },
    ],
    profile:
      "I'm a Fullstack .NET Developer passionate about building scalable APIs, modern web apps, and robust enterprise solutions. Currently working at Sanlam, I design and implement systems ranging from retirement fund portals to audit reporting solutions using C#, ASP.NET Core, EF Core, Vue.js, and Azure. With strong problem-solving skills, experience in both legacy and modern .NET systems, and a proven ability to deliver complex features within SAFe Agile environments, I aim to create impactful software that balances technical excellence with business value.",
  },
  skills: [
    { name: "C# & LINQ", level: 90 },
    { name: ".NET 6/8 & ASP.NET Core", level: 85 },
    { name: "Entity Framework Core", level: 80 },
    { name: "SQL Server & T-SQL", level: 80 },
    { name: "Microsoft Azure", level: 75 },
    { name: "Azure DevOps & CI/CD", level: 80 },
    { name: "Vue.js", level: 70 },
    { name: "React", level: 65 },
    { name: "JavaScript", level: 70 },
    { name: "Python", level: 60 },
    { name: "Flutter", level: 55 },
    { name: "Docker", level: 70 },
    { name: "Git & GitHub", level: 85 },
  ],
  languages: [{ name: "English", stars: 5 }],
  experience: [
    {
      title: "Fullstack .NET Developer",
      company: "Sanlam - Cape Town, South Africa",
      period: "January 2024 – Present",
      description:
        "Delivered new features and enhancements across Broker and SC Portals (employer retirement fund administration and user management portals) using C#, ASP.NET Core, EF Core, and Vue.js, including exit claim automation, CRUD APIs, and real-time audit reporting. Built new Broker Portal features supporting Sanlam Easy's 2025 rollout, designed 2-Pot legislation savings claims withdrawal support flows, refactored scattered registration processes into user-friendly wizards, integrated external APIs like QLink Bank Validation into the Broker Portal and other consumer applications, and maintained both legacy .NET Framework and modern .NET 6/8 systems. Participated actively in SAFe Agile processes and ensured production readiness for major deployments.",
    },
    {
      title: "Digital & Data Academy Trainee",
      company: "Sanlam - Cape Town, South Africa",
      period: "January 2023 – December 2023",
      description:
        "Completed intensive training covering Business Analysis, Process Analysis, Data Systems, Python, React, and DevOps. Automated large data transfers with Python during a merger, applied ML techniques for outlier detection, performance tested APIs with Microsoft LoadRunner, and gained hands-on enterprise development experience in C#, MSSQL, and React.",
    },
  ],
  education: [
    {
      title: "BSc Honours in Computer Science",
      institution: "University of the Witwatersrand - South Africa",
      period: "2021 – 2022",
    },
    {
      title: "BSc in Computer Science & Computational Applications",
      institution: "University of the Witwatersrand - South Africa",
      period: "2019 – 2021",
    },
    {
      title: "High School",
      institution: "St Peter's College - South Africa",
      period: "2013 – 2018",
    },
  ],
  references: [
    {
      name: "Stuart Phillips",
      position: "Product Owner, Sanlam",
      email: "stuart.phillips@sanlam.co.za",
      phone: "+27 72 985 3616",
    },
    {
      name: "Sylvia Tshangana",
      position: "Scrum Master, Sanlam",
      email: "sylviatshangana@gmail.co.za",
      phone: "+27 79 136 0727",
    },
    {
      name: "Johan Van Tonder",
      position: "Senior Developer, Sanlam",
      email: "johan.vantonder@sanlam.co.za",
      phone: "+27 72 076 1226",
    },
  ],
  interests: [
    { icon: "fa-code", name: "Coding" },
    { icon: "fa-chart-line", name: "Investing & Finance" },
    { icon: "fa-dumbbell", name: "Gym & Health" },
    { icon: "fa-music", name: "Making Music" },
    { icon: "fa-film", name: "Movies & Series" },
    { icon: "fa-mountain", name: "Hiking & Nature" },
  ],
  projects: [
    {
      title: "Couples Games",
      cardImage: "assets/images/project-page/couples-games.png",
      description:
        "A website built to allow couples (or any 2 people) to play games together, built using React with .NET and Firestore, hosted on Render.",
      previewLink: "https://couplesgames.onrender.com/",
      githubLink: "https://github.com/thefirsthero/couplesgames",
    },
    {
      title: "My Confessions",
      cardImage: "assets/images/project-page/myconfessions.png",
      description:
        "A platform for anonymous confessions, built using React and hosted on Render.",
      previewLink: "https://myconfessions.co.za",
      githubLink: "https://github.com/thefirsthero/myconfessions",
    },
    {
      title: "Weeping Willow Guesthouse",
      cardImage: "assets/images/project-page/wwgh.png",
      description:
        "[Closed Down] A website that ran for years, enabling users to browse, book, and pay for rooms at the guest house.",
      previewLink: "https://wwgh.onrender.com",
      githubLink: "https://github.com/thefirsthero/WeepingWillowGH",
    },
  ],
};

export default resumeData;
