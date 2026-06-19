function Projects() {
  return (
    <section className="projects" id="Projects">

      <h2>Projects</h2>

      <div className="project-container">

        {/* Project 1 */}
        <div className="project-card">

          <h3>🌍 TourMate Application</h3>

          <p>
            React-based travel planning application with reusable
            components and API integration.
          </p>

          <a href="https://github.com/sagargaikwad05/TourMate" target="_blank">
            GitHub →
          </a> <span><a href="https://sagartourmate.netlify.app/" target="_blank">
            live demo →
          </a></span>

        </div>


        {/* Project 2 */}
        <div className="project-card">

          <h3>💱 Currency Converter</h3>

          <p>
            Real-time currency conversion using REST APIs with
            responsive UI and asynchronous data fetching.
          </p>

          <a href="https://github.com/sagargaikwad05/currency-converter" target="_blank">
            GitHub →
          </a> 

        </div>


        {/* Project 3 */}
        <div className="project-card">

          <h3>📚 Course Management System</h3>

          <p>
            Java and MySQL application with complete CRUD operations
            and data validation.
          </p>

          <a href="https://github.com/sagargaikwad05/Course-Management-system" target="_blank">
            GitHub →
          </a>

        </div>


        {/* Project 4 */}
        <div className="project-card">

          <h3>🎫 Ticket Management System</h3>

          <p>
            Ruby on Rails backend application with PostgreSQL,
            JWT authentication and REST APIs.
          </p>

          <a href="https://github.com/sagargaikwad05/Ticketing-system" target="_blank">
            GitHub →
          </a>

        </div>

      </div>

    </section>
  );
}

export default Projects;