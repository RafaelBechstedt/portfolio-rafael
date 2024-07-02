import '../styles/components/maincontent.sass'

export default function ProjectsContainer() {
  return (
    <>
      <h2>Projetos Pessoais</h2>
      <section className="projects-container">
        <h3>Front-End</h3>
        <section className="projects-front">
          <a href="https://rafaelbechstedt.github.io/app-de-receitas-react/" className="btn" target="_blank" title="Breve resumo do Projeto 1">
            App de receitas
          </a>
          <a href="https://rafaelbechstedt.github.io/loja-online-front/" className="btn" target="_blank">
            Loja online
          </a>
        </section>
        <h3>Back-End</h3>
        <section className="projects-back">
          <a href="https://github.com/RafaelBechstedt/store-manager-API-REST-MSC" className="btn" target="_blank">
            Store manager API
          </a>
          <a href="https://github.com/RafaelBechstedt/blogs-api-node.js-sequelize" className="btn" target="_blank">
            Blogs API
          </a>
          <a href="https://github.com/RafaelBechstedt/trybers-and-dragons-TS-backend" className="btn" target="_blank">
            Trybers and Dragons
          </a>
        </section>
      </section>
    </>
  )
}
