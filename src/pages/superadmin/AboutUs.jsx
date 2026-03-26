import "./about.css";

const AboutUs = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <h1 className="about-title">About SkillHub</h1>

        <div className="about-grid">
          <div className="about-box">
            <h2>Who We Are</h2>
            <p>
              SkillHub is a professional skill development platform focused on
              bridging the gap between learning and industry requirements.
              We provide structured learning resources and career-oriented content.
            </p>
          </div>

          <div className="about-box">
            <h2>Our Mission</h2>
            <p>
              To empower individuals with industry-relevant skills and knowledge
              that help them build successful careers in technology and business.
              Learning should be practical, structured, and result-driven.
            </p>
          </div>

          <div className="about-box">
            <h2>Our Vision</h2>
            <p>
              To create a learning ecosystem where students and professionals
              can enhance their skills and become industry-ready.
              Knowledge should be accessible and impactful.
            </p>
          </div>

          <div className="about-box">
            <h2>What We Offer</h2>
            <ul>
              <li>Industry-aligned skill development</li>
              <li>Structured learning modules</li>
              <li>Real-world practical knowledge</li>
              <li>Career growth opportunities</li>
              <li>User-friendly learning experience</li>
            </ul>
          </div>

          <div className="about-box">
            <h2>Technology Stack</h2>
            <p>
              SkillHub is built using modern technologies for scalability and
              performance:
            </p>
            <ul>
              <li>React.js (Frontend)</li>
              <li>Node.js (Backend)</li>
              <li>Firebase Firestore (Database)</li>
              <li>JWT (Authentication)</li>
            </ul>
          </div>

          {/* Developer Information Section */}
          <div className="about-box developer">
            <h2>Developer Information</h2>
            <p>
              Developer Team:
            </p>
            <ul>
              <li><strong>Kirti Ubale</strong> – Full Stack Developer (Web Platform: Admin & Company Interface)</li>
              <li><strong>Payal Sonawane</strong> – Full Stack Developer (Web Platform: Admin & Company Interface)</li>
              <li><strong>Prasad Kadam</strong> – Android Developer (Student Side Android App using Java & XML)</li>
              <li><strong>Gayatri Pawar</strong> – Android Developer (Student Side Android App using Java & XML)</li>
            </ul>
            <p>
              Technologies: React.js, Node.js, Firebase, Java, XML, Android Studio  
              Purpose: Skill development platform for industry-ready learning.
            </p>
          </div>

          <div className="about-box contact">
            <h2>Contact Us</h2>
            <p>For support and inquiries:</p>
            <p>📧 support@skillhub.com</p>
            <p>🌐 www.skillhub.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;