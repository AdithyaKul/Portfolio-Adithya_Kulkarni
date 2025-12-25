import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  // Contact options
  const contactOptions = [
    { 
      name: 'Email', 
      value: 'kul.adithya@gmail.com', 
      icon: '📧',
      link: 'mailto:kul.adithya@gmail.com'
    },
    { 
      name: 'Phone', 
      value: '+91 7483408246', 
      icon: '📱',
      link: 'tel:+917483408246'
    },
    { 
      name: 'LinkedIn', 
      value: 'linkedin.com/in/adithya-r-kulkarni', 
      icon: '💼',
      link: 'https://linkedin.com/in/adithya-r-kulkarni'
    },
    { 
      name: 'GitHub', 
      value: 'github.com/Adithya-R-Kulkarni', 
      icon: '💻',
      link: 'https://github.com/Adithya-R-Kulkarni'
    },
    { 
      name: 'Location', 
      value: 'Bengaluru, Karnataka, India', 
      icon: '📍',
      link: null
    }
  ];

  // Skills data organized by category
  const skillsData = [
    {
      category: 'Frontend',
      skills: ['React.js', 'HTML5 & CSS3', 'JavaScript (ES6+)', 'Responsive Design', 'UI/UX Principles']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Database Design']
    },
    {
      category: 'Tools & Others',
      skills: ['Git & GitHub', 'Figma', 'Adobe Creative Suite', 'DaVinci Resolve', 'Canva']
    }
  ];

  return (
    <div className="resume-page">
      <div className="container">
        <div className="navigation animate-fade-in-up">
          <Link to="/" className="btn btn-secondary">
            ← Back to Home
          </Link>
        </div>
        
        <div className="resume-header animate-fade-in-up delay-1">
          <div className="resume-contact">
            <h1>Adithya R Kulkarni</h1>
            <div className="contact-info">
              <p>Bengaluru, Karnataka, India</p>
              <p>+91 7483408246 | kul.adithya@gmail.com</p>
            </div>
          </div>
          <div className="resume-title">
            <h2>Software Developer & UI/UX Enthusiast</h2>
            <h3>Creative Designer & Video Editor</h3>
          </div>
        </div>
        
        <div className="resume-content">
          <section className="resume-section animate-fade-in-up delay-2">
            <h2>Profile</h2>
            <p>
              MERN stack developer with a passion for building clean, responsive web applications and a proven, 
              award-winning talent for creative design. My focus is on blending technical logic with user-centric 
              design, drawing on an interest in UI/UX (Figma) and 2+ years of experience in graphic design and 
              video production (DaVinci Resolve, Adobe Creative Suit, Canva).
            </p>
            <p>
              As the Managing Director of OSCode, I lead a campus tech community, organize large-scale events, 
              and mentor students on development projects. Actively seeking an internship that combines software 
              development with creative challenges.
            </p>
          </section>

          <section className="resume-section animate-fade-in-up delay-3">
            <h2>Skills</h2>
            <div className="skills-categories">
              {skillsData.map((category, index) => (
                <div key={index} className="skills-category">
                  <h3 className="skills-category-title">{category.category}</h3>
                  <div className="skills-grid">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-card">
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="skills-tags">
              <span>Problem Solving</span>
              <span>Team Leadership</span>
              <span>Communication</span>
              <span>Critical Thinking</span>
              <span>Adaptability</span>
            </div>
          </section>

          <section className="resume-section animate-fade-in-up delay-4">
            <h2>Technical Projects</h2>
            <div className="projects-list">
              <div className="project">
                <h3>Community Tech Platform</h3>
                <p className="tech-stack">React.js, Node.js, MongoDB, Express.js</p>
                <p>
                  Developed a full-stack website for a college tech community with event registration, 
                  member management, and project showcase features. Implemented responsive design and 
                  integrated a CMS for easy content updates.
                </p>
              </div>
              
              <div className="project">
                <h3>Portfolio Website</h3>
                <p className="tech-stack">React.js, Node.js, MongoDB, Express.js</p>
                <p>
                  Built a personal portfolio website to showcase both technical and creative projects. 
                  Features include project filtering, admin panel for content management, and responsive design.
                </p>
              </div>
            </div>
          </section>

          <section className="resume-section animate-fade-in-up delay-0">
            <h2>Experience</h2>
            <div className="experience-list">
              <div className="experience">
                <h3>Managing Director - Tech Community</h3>
                <p className="duration">Oct 2023 - Present</p>
                <p>
                  Leading a student-run tech community with 300+ members. Organized hackathons, workshops, 
                  and coding competitions. Managed a team of 15 core members and coordinated with faculty advisors.
                </p>
              </div>
              
              <div className="experience">
                <h3>Graphic Designer - Freelance</h3>
                <p className="duration">Jan 2022 - Present</p>
                <p>
                  Designed promotional materials, social media content, and branding assets for various clients. 
                  Specialized in creating visually appealing designs that effectively communicate brand messages.
                </p>
              </div>
            </div>
          </section>

          <section className="resume-section animate-fade-in-up delay-1">
            <h2>Education</h2>
            <div className="education">
              <h3>Bachelor of Engineering in Computer Science</h3>
              <p>Nitte Meenakshi Institute of Technology, Bengaluru</p>
              <p className="duration">Expected Graduation: 2026</p>
              <p>Current CGPA: 8.9/10</p>
            </div>
          </section>

          <section className="resume-section animate-fade-in-up delay-2">
            <h2>Languages</h2>
            <div className="languages">
              <div className="language">
                <h3>English</h3>
                <p>Fluent</p>
              </div>
              <div className="language">
                <h3>Kannada</h3>
                <p>Native</p>
              </div>
              <div className="language">
                <h3>Hindi</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </section>

          <section className="resume-section animate-fade-in-up delay-3">
            <h2>Honors & Awards</h2>
            <div className="awards">
              <div className="award">
                <h3>Best Short Film - GARDANIA 2025</h3>
                <p>Recognized for post-production work on the short film 'THE FIFTH CARD'.</p>
              </div>
              <div className="award">
                <h3>First Place - Musical Instruments Competition</h3>
                <p>SAMBHRAMOTSAVA 2024</p>
              </div>
            </div>
          </section>

          {/* Reachout Section */}
          <section className="resume-section animate-fade-in-up delay-4">
            <h2>Get In Touch</h2>
            <p>Feel free to reach out to me through any of the following channels:</p>
            <div className="contact-grid">
              {contactOptions.map((contact, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">{contact.icon}</div>
                  <div className="contact-details">
                    <h3>{contact.name}</h3>
                    {contact.link ? (
                      <a href={contact.link} target="_blank" rel="noopener noreferrer">
                        {contact.value}
                      </a>
                    ) : (
                      <p>{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-download-section animate-fade-in-up delay-0">
            <h2>Download Full Resume</h2>
            <p>Get a complete copy of my resume in PDF format</p>
            <a href="/Adithya R Kulkarni.pdf" download className="btn btn-primary">
              Download PDF
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;