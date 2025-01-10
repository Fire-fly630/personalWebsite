import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Salutations, <br />Josephine Green here<br /> I'm a Software Engineer</h1>
                <h2>Front-end development / Back-end development / Data Engineering</h2>
                <Link to="/contact" className="flat-button">Contact Me</Link>
            </div>
        </div>
    )
}

export default Home