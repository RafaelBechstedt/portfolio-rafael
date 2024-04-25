import Avatar from '../img/eu.jpeg'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'
import SocialNetworkContainer from './SocialNetworks'

export default function Sidebar() {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Rafael Bechstedt" />
      <p className="title">Desenvolvedor Full-Stack</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="" className="btn">Download Currículo</a>
    </aside>

  )
}
