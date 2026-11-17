export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          width="640"
          height="400"
          className="project-image"
        />
      </div>

      <div className="project-body">
        <p className="project-tagline">{project.tagline}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <ul className="tech-list" aria-label="Technologies">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          View on GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}