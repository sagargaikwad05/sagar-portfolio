function Skills() {

  const skills = [
    "Java",
    "JavaScript",
    "React.js",
    "Spring Boot",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "Python",
    "Ruby on Rails",
    "REST APIs",
    "Git",
    "GitHub",
    "HTML5",
    "CSS3",
    "Bootstrap"
  ];

  return (
    <section className="skills" id="Skills">

      <h2>Technical Skills</h2>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;