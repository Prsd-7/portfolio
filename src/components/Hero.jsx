export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <p className="eyebrow">Frontend Developer · React · Vite</p>

        <h1>
          I build <span className="accent">fast, responsive</span> web
          experiences.
        </h1>

        <p className="hero-sub">
          Frontend developer focused on clean architecture, performance, and
          interfaces that feel effortless on every screen.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View projects
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>

        <div className="hero-metrics">
          <div>
            <strong>5</strong>
            <span>Production projects</span>
          </div>
          <div>
            <strong>React + Vite</strong>
            <span>Primary stack</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Responsive builds</span>
          </div>
        </div>
      </div>
    </section>
  );
}