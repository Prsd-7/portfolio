const skillGroups = [
  {
    title: 'Languages',
    skills: ['Core Java', 'JavaScript', 'C/C++'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Vite'],
  },
  {
    title: 'Database',
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Eclipse IDE'],
  },
];
export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="section-label">Capabilities</p>
        <h2 className="section-title">Tools I use to build.</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}