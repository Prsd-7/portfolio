import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="section-label">Selected work</p>
        <h2 className="section-title">Projects that ship.</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}