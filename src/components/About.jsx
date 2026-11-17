export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title">
          Developer with a product mindset.
        </h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I’m Prasad, a frontend developer who enjoys turning complex
              requirements into clear, usable interfaces. My work spans
              e‑commerce, food delivery, travel booking, and blockchain-backed
              evidence management.
            </p>
            <p>
              I care about performance budgets, accessibility, and maintainable
              component design. Every project in this portfolio was built with
              a focus on real user flows — not just static screens.
            </p>
          </div>

          <div className="about-highlights">
            <div>
              <span className="highlight-number">React</span>
              <p>Primary UI library across production projects</p>
            </div>
            <div>
              <span className="highlight-number">Vite</span>
              <p>Fast builds and modern bundling for every React app</p>
            </div>
            <div>
              <span className="highlight-number">Responsive</span>
              <p>Mobile-first layouts tested across breakpoints</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}