
// Portfolio data for Rakibul Islam, matching the reference HTML content and structure
const portfolioData = {
  about: {
    name: "Rakibul Islam",
    location: "Tangail, Bangladesh",
    image: "/cv/my-profile-image.jpg",
    bio: `I am a passionate and dedicated professional with an enthusiasm for web development and software engineering. I love writing code, coming up with scalable solutions and solving challenges. I am looking forward to embrace new opportunities that let me put these skills into action.`,
  roles: [ "Full Stack Developer","Application Developer","Programmer"],
    social: [
      { icon: "linkedin", url: "https://www.linkedin.com/in/md-rakibuyl-islam/" },
      { icon: "github", url: "https://github.com/md-rakibuyl-islam" },
    ],
    quote: {
      text: "Get busy living or get busy dying.",
      author: "The Shawshank Redemption",
    },
  },
  skills: [
    {
      icon: "💻",
      category: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using modern web technologies.",
      technologies: [
        { name: "HTML", percent: 90 },
        { name: "CSS", percent: 85 },
        { name: "JavaScript", percent: 70 },
        { name: "React.js", percent: 50 },
        { name: "Next.js", percent: 50 },
        { name: "Flutter", percent: 60 },
      ]
    },
    {
      icon: "⚙️",
      category: "Backend Development", 
      description: "Building robust server-side applications and APIs with various technologies.",
      technologies: [
        { name: "Node.js", percent: 65 },
        { name: "Express.js", percent: 55 },
        { name: "REST API", percent: 70 },
        { name: "Firebase", percent: 65 },
      ]
    },
    {
      icon: "�",
      category: "Programming Languages",
      description: "Proficient in multiple programming languages for diverse development needs.",
      technologies: [
        { name: "Java", percent: 70 },
        { name: "C++", percent: 85 },
        { name: "C", percent: 85 },
        { name: "TypeScript", percent: 60 },
        { name: "Python", percent: 30 },
      ]
    },
    {
      icon: "🛠️",
      category: "Tools & Technologies",
      description: "Expertise in development tools and modern technologies for efficient workflow.",
      technologies: [
        { name: "Git/GitHub", percent: 85 },
        { name: "VS Code", percent: 90 },
        { name: "Android Studio", percent: 70 },
        { name: "Firebase", percent: 65 },
        { name: "Hive", percent: 60 },
        { name: "API Integration", percent: 75 },
      ]
    },
    {
      icon: "🧩",
      category: "Problem Solving",
      description: "Strong analytical and problem-solving skills demonstrated through competitive programming.",
      technologies: [
        { name: "LeetCode Problems", value: 40, percent: 80 },
        { name: "Codeforces Problems", value: 650, percent: 75 },
        { name: "CodeChef Problems", value: 300, percent: 70 },
        { name: "AtCoder Problems", value: 150, percent: 65 },
      ]
    },
    {
      icon: "👥",
      category: "Management & Leadership",
      description: "Strong leadership and management skills for effective team collaboration and project delivery.",
      technologies: [
        { name: "Project Management", percent: 80 },
        { name: "Team Management", percent: 85 },
        { name: "Leadership", percent: 80 },
        { name: "Teamwork", percent: 90 },
        { name: "Critical Thinking", percent: 80 },
      ]
    }
  ],
  services: [
    {
      title: "Web Development",
      icon: "/icons/web-design-icon-flat-20.jpg",
      description:
        "Building modern, responsive websites and web applications using the latest technologies. I specialize in creating scalable, efficient, and user-friendly web solutions that enhance user experience and meet business goals.",
    },
    {
      title: "Software Engineering",
      icon: "/icons/soft-eng.webp",
      description:
        "Designing and developing robust software solutions that are both scalable and maintainable. With a focus on problem-solving and optimizing performance, I create systems that streamline processes and drive innovation.",
    },
    {
      title: "Mobile App Development",
      icon: "📱",
      description:
        "Creating cross-platform mobile applications with React Native and native technologies. I build intuitive, performant mobile apps that provide seamless user experiences across iOS and Android platforms.",
    },
    {
      title: "API Development",
      icon: "🔗",
      description:
        "Developing robust RESTful APIs and microservices that power modern applications. I create secure, scalable backend solutions with proper documentation and testing for seamless integration.",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Mobile Tracker",
      description: "A comprehensive Flutter-based mobile tracking application with real-time location monitoring and user management features.",
      image: "/images/gallery/1.jpg",
      technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"],
      category: "mobile",
      githubUrl: "https://github.com/rakibtkg/Mobile-Tracker",
      liveUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Realtime Chat Application",
      description: "Real-time chat application with file sharing system built in C programming language with socket programming.",
      image: "/images/gallery/2.jpg",
      technologies: ["C", "Socket Programming", "File System", "Network Programming"],
      category: "desktop",
      githubUrl: "https://github.com/rakibtkg/Realtime-Chat-Application-With-File-Sharing-System",
      liveUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "NotePad Using Java",
      description: "Feature-rich text editor application built with Java Swing providing comprehensive document editing capabilities.",
      image: "/images/gallery/1.jpg",
      technologies: ["Java", "Swing", "GUI", "File I/O"],
      category: "desktop",
      githubUrl: "https://github.com/rakibtkg/NotePad-Using-Java",
      liveUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "JavaFX Student Management System",
      description: "Desktop application with modern JavaFX UI for student data management, featuring database integration and form submissions.",
      image: "/images/gallery/2.jpg",
      technologies: ["JavaFX", "MySQL", "FXML", "CSS"],
      category: "desktop",
      githubUrl: "https://github.com/rakibtkg/javafx-student-management",
      liveUrl: "#",
      featured: false
    }
  ],
  resume: {
    experiences: [
      {
        title: "Mobile Application Developer",
        company: "Mobile Tracker Project",
        period: "2024 - 2024",
        description:
          "Developed a comprehensive Flutter-based mobile tracking application with real-time location monitoring capabilities. Implemented user management features, Google Maps API integration, and Firebase backend services. The application provides seamless tracking functionality with an intuitive user interface and robust security features.",
        link: "https://github.com/rakibtkg/Mobile-Tracker",
      },
      {
        title: "System Programmer",
        company: "Realtime Chat Application",
        period: "2023 - 2024",
        description:
          "Built a high-performance real-time chat application with file sharing capabilities using C programming and socket programming. Implemented network protocols, file transfer mechanisms, and concurrent user handling. The system demonstrates advanced understanding of network programming and system-level development.",
        link: "https://github.com/rakibtkg/Realtime-Chat-Application-With-File-Sharing-System",
      },
     
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science and Engineering",
        school: "Mawlana Bhashani Science and Technology University",
        period: "2023 - Present",
        location: "Tangail, Dhaka, Bangladesh",
      },
      {
        degree: "Higher Secondary",
        school: "Cantonment Public School and College, BUSMS",
        period: "2018 - 2020",
        location: "Parbatipur, Dinajpur",
      },
    ],
    resumeFile: "/cv/my-cv.pdf",
  },
  funFacts: [
    { label: "Problems Solved", value: 1000 },
    { label: "Contests Participated", value: 80 },
    { label: "Projects Done", value: 34 },
    { label: "Years Experience", value: 2 },
  ],
  blog: [
    {
      title: "AI: Artificial Intelligence or Automated Idiocy?",
      image: "images/blog/1.jpg",
      url: "single-blog.html",
      excerpt:
        "In recent years, Artificial Intelligence has evolved from an specialized topic among tech enthusiasts to a mainstream discussion, from...",
    },
    {
      title: "AI: Artificial Intelligence or Automated Idiocy? (Part-2)",
      image: "images/blog/2.jpg",
      url: "single-blog-2.html",
      excerpt:
        "The Middle Way: Human-AI Collaboration <br>Instead of intelligence or idiocy, there should be a...",
    },
  ],
  contact: {
    email: "rakibulislammbstu32@gmail.com",
    phone: "01601049165",
    address: "Dhaka, Bangladesh",
  },
  footer: {
    copyright: "© 2025 Rakibul Islam. All rights reserved.",
    social: [
      { icon: "github", url: "https://github.com/rakibtkg" },
      { icon: "linkedin", url: "https://www.linkedin.com/in/rakibul-islam-8372852bb/" },
    ],
  },
};

export default portfolioData;
