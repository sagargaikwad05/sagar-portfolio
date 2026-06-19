import profile from "../assets/profile.jpg";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section className="hero" id="Hero">

      <img
        src={profile}
        alt="Sagar Gaikwad"
        className="profile-img"
      />

      <h1>Hi, I'm Sagar Raju Gaikwad 👋</h1>

      <h2 className="typewriter-text">
        <Typewriter
          words={[
            "Full Stack Java Developer",
            "React Developer",
            "Backend Developer"
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1200}
        />
      </h2>

      <p>
        I build scalable and responsive web applications using React.js,
        Java, Spring Boot and modern web technologies.
      </p>

      <div className="hero-buttons">

  <a href="#projects" className="btn glass primary">
    🚀 View Projects
  </a>

  <a href="/Sagar_Gaikwad_Resume.pdf" download className="btn glass secondary">
    📄 Download Resume
  </a>

  <a href="#contact" className="btn glass ghost">
    ✉️ Contact Me
  </a>

</div>

    </section>
  );
}

export default Hero;