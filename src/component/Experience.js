function Experience() {
  return (
    <section className="experience" id="Experience">

      <h2>Experience</h2>

      <div className="timeline">

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="experience-card">

            <h3>Backend Developer Intern</h3>

            <h4>Q2Pay Technologies Pvt Ltd</h4>

            <span>Jan 2026 - Mar 2026</span>

            <ul>
              <li>Developed backend functionality for Ticket Management System.</li>

              <li>Built REST APIs for ticket creation and status updates.</li>

              <li>Worked with PostgreSQL and ActiveRecord.</li>

              <li>Implemented UUID-based database records.</li>

              <li>Improved query performance and workflow management.</li>
            </ul>

            <a
              href="/Internship.pdf"
              target="_blank"
              rel="noreferrer"
              className="certificate-btn"
            >
              📄 View Internship Certificate
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;