// Helper to dynamically calculate age (Birthdate: October 1, 2003)
// If today's date is before Oct 1, 2026, it will return 22. From Oct 1, 2026, it will auto-update to 23.
export const getAge = (): number => {
  const birthDate = new Date("2003-10-01");
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export interface Project {
  title: string;
  description: string;
  categories: string[]; // e.g., ["Web", "Full Stack", "Backend", "Scripts"]
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  features?: string[];
  challengesSolved?: string;
  imageUrl?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface PortfolioData {
  personalInfo: {
    firstName: string;
    lastName: string;
    fullName: string;
    title: string;
    subtitle: string;
    age: number;
    bioParagraphs: string[];
    aboutParagraphs: string[];
    avatarUrl: string;
    resumeUrl?: string;
  };
  socialLinks: {
    email: string;
    github: string;
    linkedin: string;
    whatsapp: string;
    phone: string;
    web3formsKey?: string;
  };
  skills: SkillGroup[];
  projects: Project[];
  education: EducationItem[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    firstName: "Thineth",
    lastName: "Shalinda",
    fullName: "R.M. Thineth Shalinda",
    title: "Full Stack Developer",
    subtitle: "CS Undergraduate Student",
    age: getAge(), // Dynamic age calculator
    bioParagraphs: [
      `I am a passionate Full Stack Developer and a Computer Science undergraduate student at ICBT Colombo, currently ${getAge()} years old. I approach software engineering with a meticulous mindset—striving for optimized logic, responsive web layouts, and reliable relational databases.`,
      "I own the full lifecycle of application building, including desktop systems, mobile platforms, and interactive responsive web applications. I am highly driven by practical, real-world development challenges.",
    ],
    aboutParagraphs: [
      "My journey into software development began with a deep curiosity for how complex systems operate behind the scenes. Since then, I have immersed myself in learning modern programming paradigms and building scalable, full-stack applications from the ground up.",
      "As a Computer Science undergraduate, I consistently bridge the gap between rigorous academic theory and practical, hands-on coding. Whether I'm architecting a complex relational database or crafting smooth micro-animations for a UI, my primary focus is always on delivering high-quality, maintainable, and efficient code."
    ],
    avatarUrl: "/profile.jpeg", // Located at public/profile.jpeg
    resumeUrl: "#",
  },
  socialLinks: {
    email: "thinethshalindha1990@gmail.com",
    github: "https://github.com/Thineth-devops",
    linkedin: "https://www.linkedin.com/feed/",
    whatsapp: "https://wa.me/94762519388", // Sri Lanka (+94) whatsapp direct link format
    phone: "0762519388",
    web3formsKey: "484ad920-29c0-40f7-9a03-d3edf39ca577",
  },
  skills: [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "C++", "Kotlin", "PHP", "HTML", "CSS"],
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Next.js", "React", "Node.js", "Express", "Android Studio"],
    },
    {
      category: "Databases & Tools",
      skills: ["MySQL", "Firebase", "Git", "GitHub", "Postman", "Tailwind CSS"],
    },
  ],
  projects: [
    {
      title: "Class Management System (CMS)",
      description:
        "A premium class management program designed for educational institutes to schedule lectures, track student records, coordinate faculty timetables, and handle data storage.",
      categories: ["Web", "Full Stack"],
      tech: ["React", "Node.js", "Express", "SQLite"],
      githubUrl: "https://github.com/Thineth388/CMS-System",
      featured: true,
      imageUrl: "/CMS-System.png",
      features: [
        "Premium dark/light mode UI with custom components and micro-animations",
        "Dynamic Dashboard & Analytics with real-time tracking",
        "Advanced Attendance and Payment Processing systems",
        "Decoupled Client-Server architecture with RESTful APIs"
      ],
      challengesSolved: "Optimizing database queries in SQLite for fast read-writes when rendering large student datasets on the live analytics dashboard."
    },
    {
      title: "Point of Sale (POS) System",
      description:
        "A premium inventory control and billing application streamlining product stock tracking, checkout, retail transactions, and automated daily reporting.",
      categories: ["Web", "Full Stack"],
      tech: ["React", "Next.js", "Tailwind CSS", "SQLite"],
      githubUrl: "https://github.com/Thineth388/nextpos-system",
      featured: true,
      imageUrl: "/nextpos-system.png",
      features: [
        "Sleek UI with vibrant colors and micro-animations for rapid checkouts",
        "Live stock metrics monitoring & automated reorder warnings",
        "Multi-payment method register and receipt generator",
        "Daily transactions charts with dynamic graphical reporting modules"
      ],
      challengesSolved: "Maintaining fast client-side rendering during rapid barcode scans while concurrently updating item quantities."
    },
    {
      title: "Smart Temp Monitor App",
      description:
        "A premium cross-platform mobile application for critical environment monitoring. Features real-time temperature tracking, animated telemetry charts, and threshold alerts.",
      categories: ["Mobile", "IoT"],
      tech: ["React Native", "Expo", "ChartKit"],
      githubUrl: "https://github.com/Thineth388/Smart-Temp-Monitor",
      featured: true,
      imageUrl: "/Smart-Temp-Monitor.png",
      features: [
        "Live telemetry dashboard with dynamic bezier trend charts",
        "Configurable multi-channel alerts (WhatsApp, SMS, Offline)",
        "Automated weekly/monthly report generation and secure downloads",
        "Futuristic dark-mode UI with linear gradients and micro-animations"
      ],
      challengesSolved: "Handling state updates and fluid chart rendering during rapid, continuous telemetry data ingestion without dropping frames."
    },
    {
      title: "Agriculture Monitoring App",
      description:
        "An IoT-enabled Android application built to collect moisture, humidity, and temperature levels directly from field sensors, presenting analytical graphs to farmers.",
      categories: ["Mobile", "IoT"],
      tech: ["Android Studio", "Kotlin", "Firebase"],
      githubUrl: "#",
      featured: true,
      features: [
        "Real-time sensor telemetry integration with Firebase RTDB",
        "Custom SVG charts to plot 24-hour humidity and temperature cycles",
        "Instant push notifications when soil moisture slips below critical levels",
        "Offline database caching using SQLite/Room for remote field operations"
      ],
      challengesSolved: "Constructing background telemetry sync services in Android that minimize battery draw under continuous socket polling constraints."
    },
    {
      title: "University Attendance Web App",
      description:
        "A secure academic web interface for lecturers and student cohorts to log, verify, and view class attendances, featuring automated reports and visual warning alerts.",
      categories: ["Web", "Full Stack"],
      tech: ["React", "Node.js", "Express", "MySQL"],
      githubUrl: "https://github.com/Thineth388/University-Attendance-System",
      featured: true,
      imageUrl: "/University-Attendance-System.png",
      features: [
        "Secure student verification using QR codes generated dynamically per lecture",
        "Lecturer dashboard to manage student timetables and cohorts",
        "Automated email warnings for students falling below the 80% threshold",
        "CSV/Excel data exporting for administrative archiving purposes"
      ],
      challengesSolved: "Securing QR codes against student spoofing by injecting dynamic cryptographic tokens containing 30-second expiration dates."
    },
    {
      title: "Mood Player (Emotion Detection)",
      description:
        "An intelligent web app using computer vision models to identify facial expressions and dynamically curate custom music playlists based on the user's emotional state.",
      categories: ["AI/ML", "Web"],
      tech: ["Python", "TensorFlow", "OpenCV", "React"],
      githubUrl: "#",
      featured: true,
      features: [
        "Browser-based webcam capture and framing pipeline",
        "Facial landmark extraction models optimized using TensorFlow Lite",
        "Real-time sentiment classification (Happy, Sad, Stressed, Calm)",
        "Dynamic API integration with Spotify Web Player SDK for mood curation"
      ],
      challengesSolved: "Optimizing the frame processing rate in the browser using Web Workers to prevent video lag while running classification inference."
    },
    {
      title: "Jack Sparrow Store",
      description:
        "A beautifully styled pirate-themed e-commerce platform incorporating shopping carts, catalog filtering, responsive grids, and clean checkout states.",
      categories: ["Web"],
      tech: ["Next.js", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/Thineth-devops/jack-sparrow-site",
      featured: true,
      imageUrl: "/jack-sparrow.jpg",
      features: [
        "Dynamic theme controls with atmospheric custom animations",
        "Optimized client-side item sorting, rating filters, and search",
        "Interactive canvas map for order shipping estimation routes",
        "Local Storage shopping cart state manager with immediate badges"
      ],
      challengesSolved: "Implementing smooth page transitions and micro-interactions using standard CSS keyframes without hurting performance."
    },
    {
      title: "Medicare Management System",
      description:
        "A web application regulating medical patient records, doctor channeling sessions, pharmaceutical item stock, and secure clinic history logs.",
      categories: ["Web", "Database"],
      tech: ["React", "PHP", "MySQL", "CSS"],
      githubUrl: "https://github.com/Thineth388/Modern-Medicare-Management-System",
      featured: true,
      imageUrl: "/medicare.png",
      features: [
        "Interactive doctor scheduling availability panels",
        "Encrypted patient electronic medical records (EMR)",
        "Pharmacy inventory tracking with auto-depleting prescription quantities",
        "Responsive administrative and doctor-specific dashboards"
      ],
      challengesSolved: "Designing a clean, relational DB structure that avoids circular dependencies while connecting appointments, prescriptions, and billing items."
    },
  ],
  education: [
    {
      degree: "BSc (Hons) in Computer Science",
      institution: "ICBT Colombo",
      period: "Registered: 2024/05/24 - Present (3 Years Remaining)",
      description:
        "Actively developing core expertise in software architecture, algorithm designs, data structures, and enterprise database systems management.",
    },
  ],
};
export default portfolioData;
