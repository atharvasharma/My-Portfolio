import React, { useState } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, ExternalLinkIcon, X, Menu } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();



  const skills = {
    'Backend': ['Java', 'Dagger', 'Object Oriented Programming', 'Distributed Systems', 'Junit', 'C++'],
    'Frontend': ['React', 'Typescript', 'JavaScript', 'CSS', 'HTML', 'Jest'],
    'Databases': ['DynamoDB'],
    'Cloud (AWS)': ['ECS', 'Lambda', 'SQS', 'SNS', 'Step functions', 'Load Balancers', 'Cloudwatch']
  };

  const projects = [
    {
      title: "MoodCanvas - Creative mood visualization",
      description: [
        "Developed a personalized mood tracking application using React, Node.js, and DynamoDB, enabling users to monitor and visualize their emotional well-being",
        "Implemented secure authentication using Google OAuth 2.0, ensuring reliable user identification and data privacy",
        "Engineered an intuitive calendar-based visualization system that displays mood patterns and trends over time",
        "Designed a scalable NoSQL data model using DynamoDB, optimizing for quick retrieval of mood data",
        "Built RESTful APIs for mood logging and retrieval operations with proper error handling and validation",
        "Created responsive calendar interface with interactive elements for mood input and historical data viewing"
      ],
      technologies: ["React", "Node.js", "Express", "Google OAuth 2.0", "DynamoDB"],
      links: [
        { url: "https://github.com/atharvasharma/MoodTrackerFrontend", label: "Frontend Repository", icon: "github" },
        { url: "https://github.com/atharvasharma/MoodTrackerBackend", label: "Backend Repository", icon: "github" }
      ]
    },
    {
      title: "MediaVault - Full Stack Media Management Platform",
      description: [
        "Engineered a scalable media management solution using React, Node.js, and AWS S3, enabling secure storage and seamless retrieval of photos and videos",
        "Implemented efficient media handling using pre-signed S3 URLs and optimized backend responses, reducing load times by serving compressed thumbnails for gallery view",
        "Designed RESTful APIs for media retrieval, incorporating robust error handling and validation",
        "Built responsive gallery interface with lazy loading and infinite scroll for smooth user experience across devices"
      ],
      technologies: ["React", "Node.js", "Express", "S3", "FFMpeg"],
      links: [
        { url: "https://github.com/atharvasharma/atharva-drive-UI", label: "Frontend Repository", icon: "github" },
        { url: "https://github.com/atharvasharma/atharva-drive-backend", label: "Backend Repository", icon: "github" }
      ]
    },
    {
      title: "EventFlow - Full Stack Event Registration Platform",
      description: [
        "Architected a comprehensive event registration system with an admin dashboard using MERN stack (MongoDB, Express, React, Node.js)",
        "Implemented secure authentication using Passport.js with role-based access control (RBAC) for admin and attendee portals",
        "Engineered real-time analytics dashboard for administrators to monitor registration metrics and attendee statistics",
        "Designed secure document upload system for attendee photo IDs with proper validation and storage",
        "Built RESTful APIs for registration processing, attendee management, and analytics with comprehensive error handling",
        "Developed responsive admin interface with data visualization for registration trends and attendee insights"
      ],
      technologies: ["React", "Node.js", "Express", "Passport", "MongoDB", "S3"],
      links: [
        { url: "https://github.com/atharvasharma/Registration-Management", label: "Repository", icon: "github" }
      ]
    },
    {
      title: "URL Shortener with TTL",
      description: [
        "Designed and developed a Node.js backend for a URL shortener service with TTL-based expiration, ensuring time-sensitive access to shortened links.",
        "Implemented RESTful APIs for creating short URLs with a customizable TTL and retrieving the original URL before expiry.",
        "Utilized in-memory database for efficient storage and TTL management of shortened URLs.",
        "Built a React.js frontend with intuitive forms for inputting long URLs and TTL, displaying the generated short URL.",
        "Ensured robust functionality with validation, error handling, and automated expiration using scheduled tasks or database TTL indexes."
      ],
      technologies: ["React", "Node.js", "Express", "S3"],
      links: [
        { url: "https://github.com/atharvasharma/URLShortnerFrontend", label: "Frontend Repository", icon: "github" },
        { url: "https://github.com/atharvasharma/URLShortnerBackend", label: "Backend Repository", icon: "github" }
      ]
    }
  ];

  const ProjectLinks = ({ links }) => {
    return (
      <div className="flex gap-3 flex-wrap">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-md bg-zinc-700 hover:bg-zinc-600 text-zinc-100 transition-colors"
          >
            {link.icon === 'github' ? (
              <GithubIcon size={16} />
            ) : (
              <ExternalLinkIcon size={16} />
            )}
            {link.label}
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-900 pb-16 relative">
      <header className="sticky top-0 z-50 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Atharva Sharma</h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="flex gap-1 rounded-lg p-1">
                {['home', 'resume', 'projects', 'contact'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 px-4 rounded-md transition-colors capitalize ${activeTab === tab
                      ? 'bg-slate-700 text-white'
                      : 'text-zinc-400 hover:text-white'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-zinc-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 border-t border-zinc-800 pt-4">
              <div className="flex flex-col gap-2">
                {['home', 'resume', 'projects', 'contact'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setIsMenuOpen(false);
                    }}
                    className={`py-2 px-4 rounded-md transition-colors capitalize text-left ${activeTab === tab
                      ? 'bg-slate-700 text-white'
                      : 'text-zinc-400 hover:text-white'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      <main className="p-8">
        <div className="max-w-5xl mx-auto">

          {/* Home Tab Content */}
          {activeTab === 'home' && (
            <div className="max-w-3xl mx-auto space-y-8 py-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-full overflow-hidden bg-zinc-800 flex-shrink-0">
                  <img
                    src="https://atharva-portfolio.s3.ap-south-1.amazonaws.com/1735573507522.jpeg"
                    alt="Atharva Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold text-white mb-2">Atharva Sharma</h2>
                  <h3 className="text-xl text-gray-300 mb-4">Software Development Engineer II at Amazon</h3>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a href="mailto:atharvasjp1@gmail.com" className="text-zinc-400 hover:text-sky-400">
                      <MailIcon size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/atharva-sharma/" className="text-zinc-400 hover:text-sky-400">
                      <LinkedinIcon size={20} />
                    </a>
                    <a href="https://github.com/atharvasharma" className="text-zinc-400 hover:text-sky-400">
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
                <h3 className="text-xl font-bold text-white mb-4">About Me</h3>
                <p className="text-zinc-300 leading-relaxed">
                  I bring over 3 years of experience in the world of software development, specialising in crafting robust architectures from conceptualisation to detailed implementation with proficiency in both High-Level Design (HLD) and Low-Level Design (LLD) for distributed systems. I've successfully delivered scalable solutions that stand the test of real-world challenges using technologies like Java, Javascript, React and Amazon Web Services.
                </p>
                <div className="mt-6 space-y-2">
                  <p className="text-zinc-300">
                    <span className="text-zinc-200 font-bold">Location:</span> Bangalore, India
                  </p>
                  <p className="text-zinc-300">
                    <span className="text-zinc-200 font-bold">Experience:</span> 3+ years
                  </p>
                  <p className="text-zinc-300">
                    <span className="text-zinc-200 font-bold">Focus Areas:</span> Distributed Systems, Full Stack Development, Cloud Architecture
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Resume Tab Content */}
          {activeTab === 'resume' && (


            <div className="space-y-8 py-12">
              <a
                href="https://drive.google.com/file/d/1fqRmA_wWEVf9FH0yL1RCfXuzz9Yrmqwr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 hover:bg-zinc-600 inline-flex items-center gap-2 px-4 py-2 text-white rounded-lg shadow-md transition focus:ring-2 focus:ring-sky-400"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m2 4h-4m4 0v1a3 3 0 01-3 3h-1a3 3 0 01-3-3V7a3 3 0 013-3h1a3 3 0 013 3v1m0 8h4m-4 0v1a3 3 0 003 3h1a3 3 0 003-3V7a3 3 0 00-3-3h-1a3 3 0 00-3 3v1" />
                </svg>
                Download Resume
              </a>
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
                      <h3 className="text-xl font-bold text-white mb-4">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-zinc-700 hover:bg-zinc-600 text-zinc-100 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Experience</h2>

                <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">Software Development Engineer II</h3>
                      <p className="text-gray-100">Amazon</p>
                    </div>
                    <p className="text-zinc-400">Oct 2021 - Present</p>
                  </div>
                  <ul className="list-disc list-inside text-zinc-200 space-y-2">
                    <li>Designed and implemented an Extract Transform Load system handling 100 million catalog items, reducing customer onboarding time from 7 days to 2 days.</li>
                    <li>Facilitated off-Amazon sellers’ utilization of Amazon Fulfillment services by designing and imple- menting orders, inventory and shipments module on SupplyChainPortal.
                    </li>
                    <li>Designed and implemented a framework for reducing registration failures in Amazon Multi-Channel Fulfillment business by 10% and improving seller registration time by 30%.</li>
                    <li>Developed Buy With Prime functionality for Amazon Merchants on Seller Central to reduce mer- chant friction and increase customer acquisition by 50%.</li>
                  </ul>
                </div>

                <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">UI Intern</h3>
                      <p className="text-gray-100">Unicommerce</p>
                    </div>
                    <p className="text-zinc-400">Jan 2021 - Jun 2021</p>
                  </div>
                  <ul className="list-disc list-inside text-zinc-200 space-y-2">
                    <li>Migrated 5 crucial modules from Choona.js to React</li>
                    <li>Implemented Internationalization support and developed a PWA using Ionic</li>
                  </ul>
                </div>
              </section>



              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Education</h2>
                <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
                  <h3 className="text-xl font-bold text-white">The LNM Institute of Information Technology</h3>
                  <p className="text-gray-100">B.Tech in Communication & Computer Engineering</p>
                  <p className="text-zinc-400 mt-2">2017-2021</p>
                  <p className="text-zinc-300 mt-2">GPA: 8.24 / 10.00</p>
                </div>
              </section>
            </div>
          )}

          {/* Projects Tab Content */}
          {activeTab === 'projects' && (
            <div className="space-y-8 py-12">
              <h2 className="text-2xl font-bold text-white mb-6">Featured Projects</h2>
              {projects.map((project, index) => (
                <div key={index} className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <ProjectLinks links={project.links} />
                    </div>

                    <div className="text-zinc-300">
                      <ul className="list-disc list-inside text-zinc-200 space-y-2">
                        {project.description.map((description, idx) => (
                          <li key={idx}>{description}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-zinc-700 hover:bg-zinc-600 text-zinc-100 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Contact Tab Content */}
          {activeTab === 'contact' && (
            <div className="max-w-2xl mx-auto space-y-8 py-12">
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>

              <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
                <div className="space-y-6">
                  <a href="mailto:atharvasjp1@gmail.com" className="flex items-center space-x-4 text-zinc-300 hover:text-sky-400 transition-colors">
                    <MailIcon size={24} />
                    <span>atharvasjp1@gmail.com</span>
                  </a>

                  <a href="tel:8890307960" className="flex items-center space-x-4 text-zinc-300 hover:text-sky-400 transition-colors">
                    <PhoneIcon size={24} />
                    <span>+91 8890307960</span>
                  </a>

                  <a href="https://www.linkedin.com/in/atharva-sharma/" className="flex items-center space-x-4 text-zinc-300 hover:text-sky-400 transition-colors">
                    <LinkedinIcon size={24} />
                    <span>LinkedIn</span>
                  </a>

                  <a href="https://github.com/atharvasharma" className="flex items-center space-x-4 text-zinc-300 hover:text-sky-400 transition-colors">
                    <GithubIcon size={24} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <footer className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 z-50">
          <div className="max-w-5xl mx-auto px-8 py-4 flex justify-between items-center">
            <p className="text-zinc-400 text-sm">
              © {currentYear} Atharva Sharma
            </p>
            <div className="flex gap-4">
              <a href="mailto:atharvasjp1@gmail.com" className="text-zinc-400 hover:text-sky-400 transition-colors">
                <MailIcon size={18} />
              </a>
              <a href="https://www.linkedin.com/in/atharva-sharma/" className="text-zinc-400 hover:text-sky-400 transition-colors">
                <LinkedinIcon size={18} />
              </a>
              <a href="https://github.com/atharvasharma" className="text-zinc-400 hover:text-sky-400 transition-colors">
                <GithubIcon size={18} />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;