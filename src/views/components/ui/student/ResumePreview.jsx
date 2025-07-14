function ResumePreview({ data }) {
  const { name, title, email, phone, location, experience, projects, skills } = data;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>{email} | {phone} | {location}</p>

      <hr />

      <h3>Experience</h3>
      <ul>
        {experience.map((exp, i) => (
          <li key={i}>
            <strong>{exp.role}</strong> at {exp.company} ({exp.years})
          </li>
        ))}
      </ul>

      <h3>Projects</h3>
      <ul>
        {projects.map((proj, i) => (
          <li key={i}>{proj}</li>
        ))}
      </ul>

      <h3>Skills</h3>
      <p>{skills.join(", ")}</p>
    </div>
  );
}

export default ResumePreview;
