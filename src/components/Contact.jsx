export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let’s build something.</h2>
          <p className="contact-copy">
            Open to frontend roles, freelance work, and collaboration on
            React-based products.
          </p>

          <ul className="contact-links">
            <li>
              <a href="mailto:temkarp822@gmail.com">temkarp822@gmail.com</a>
            </li>
            <li>
              <a
                href="https://github.com/Prsd-7"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Prsd-7
              </a>
            </li>
          </ul>
        </div>

        <form
          className="contact-form"
          action="mailto:temkarp822@gmail.com"
          method="post"
          encType="text/plain"
        >
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" required />
          </label>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}