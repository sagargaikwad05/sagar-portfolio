function Contact() {
  return (
    <section className="contact" id="Contact">

      <h2>Contact Me</h2>

      <div className="contact-card">

        <div className="contact-item">
          <h3>Email</h3>
          <p>sagargaikwad0518@gmail.com</p>
        </div>

        <div className="contact-item">
          <h3>Phone</h3>
          <p>+91 9167913852</p>
        </div>

        <div className="contact-item">
          <h3>Location</h3>
          <p>Navi Mumbai, India</p>
        </div>

        <div className="social-buttons">

          <a
            href="https://www.linkedin.com/in/sagargaikwad05/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/sagargaikwad05"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

        </div>

      </div>

      <footer>
        © 2026 Sagar Raju Gaikwad | Full Stack Java Developer
      </footer>

    </section>
  );
}

export default Contact;