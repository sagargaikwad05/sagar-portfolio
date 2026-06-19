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

      <h1>Sagar Raju Gaikwad</h1>

      <h2>

        <Typewriter
          words={[
            "Full Stack Java Developer",
            "React Developer",
            "Backend Developer"
          ]}
          loop={true}
        />

      </h2>

      <p>
        Building scalable web applications with React,
        Java and Spring Boot.
      </p>

      <a href="/Sagar_Gaikwad_Resume . (1).pdf" download>
  <button className="resume-btn">
    Download Resume
  </button>
</a>

    </section>
  );
}

export default Hero;