import logo from "./logo.svg";
import "./App.css";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="app">
      <header>
        <ul className="navbar">
          <li>Profile</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Hire me!</li>
        </ul>
      </header>
      <body>
        <section className="profile">
          <img src={logo} />
          <h1>Luís Filipe Longo</h1>
          <h2>Frontend developper</h2>
          <hr />
          <p>Lorem impsum dolor sit amet</p>
          <ul>
            <li>
              <a href="https://github.com/luislongo">
                <FiGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/luislongo/">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </section>
      </body>
    </div>
  );
}

export default App;
