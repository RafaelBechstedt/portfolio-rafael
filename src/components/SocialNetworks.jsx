import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import '../styles/components/socialnetworks.sass'

export default function SocialNetworkContainer() {
  return (
    <section id="social-networks">
        <a href="https://www.linkedin.com/in/rafael-bechstedt/" className="social-btn" id='linkedin' target="_blank">
        <FaLinkedinIn />
        </a>
        <a href="https://github.com/RafaelBechstedt" className="social-btn" id='github' target="_blank">
        <FaGithub />
        </a>
        <a href="https://www.instagram.com/rafaelbechstedt/" className="social-btn" id='instagram' target="_blank">
        <FaInstagram />
        </a>
    </section>
  );
}
