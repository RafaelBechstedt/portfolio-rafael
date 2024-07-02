import {
    DiDocker,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiJava,
    DiMongodb,
    DiBootstrap
} from "react-icons/di";


import "../styles/components/technologiescontainer.sass";

const technologies = [
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "java", name: "Java", icon: <DiJava /> },
    { id: "docker", name: "Docker", icon: <DiDocker /> },
    { id: "mongo", name: "MongoDB", icon: <DiMongodb /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  ];

export default function TechnologiesContainer() {
    return (
        <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}
