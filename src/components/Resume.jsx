export default function Resume() {
  return (
    <section className="section" id="resume">
      <div className="container">
        <p className="section-label">Resume</p>
        <h2 className="section-title">Experience and education.</h2>

        <div className="resume-timeline">
          <div className="timeline-item">
            <span className="timeline-year">2024 — 2026</span>
            <h3>Master of Computer Applications (MCA)</h3>
            <p>Amity University, Mumbai · CGPA 8.30</p>
          </div>

          <div className="timeline-item">
            <span className="timeline-year">June 2025</span>
            <h3>Java Full Stack Intern · Zidio</h3>
            <p>
              Developed a job portal web application using Java, React.js, and
              MySQL. Designed database tables for users, job postings, and
              applications.
            </p>
          </div>

          <div className="timeline-item">
            <span className="timeline-year">2021 — 2024</span>
            <h3>BSc in Information Technology</h3>
            <p>Mumbai University · CGPA 9.08</p>
          </div>

          <div className="timeline-item">
            <span className="timeline-year">2024</span>
            <h3>Certifications</h3>
            <p>
              Advanced Diploma in Software Programming · Static Website
              Development (NxtWave CCBP)
            </p>
          </div>
        </div>

        <div className="resume-actions">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            aria-label="View resume in a new tab"
          >
            View resume
          </a>
          <a
            href="/resume.pdf"
            download="Prasad_Temkar_Resume.pdf"
            className="btn btn-primary"
            aria-label="Download resume PDF"
          >
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}