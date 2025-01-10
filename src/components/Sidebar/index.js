import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faSuitcase, faBars, faClose, faFloppyDisk} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            {/* Images */}
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="project-link" to="/projects">
                <FontAwesomeIcon icon={faFloppyDisk} color="4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/josephine-green-a2420a295'>
                    <FontAwesomeIcon icon={faLinkedin} color="#429de8"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.youtube.com/@josiegreen6170'>
                    <FontAwesomeIcon icon={faYoutube} color="#429de8"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://github.com/Fire-fly630'>
                    <FontAwesomeIcon icon={faGithub} color="#429de8"/>
                </a>
            </li>
        </ul>
    </div>
)
export default Sidebar