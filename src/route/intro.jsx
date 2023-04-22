import { Link } from "react-router-dom";

import Rose from "../assets/images/Rose.png";
import "../assets/css/intro.css";

function Intro() {
  return (
    <section className="introSection">
      <div className="introSection__content">
        <header className="introSection__header">
          <h2 className="app-title">$ad Inside</h2>
          <h3 className="app-realeased-date"> May 2020 </h3>
        </header>

        <div className="app-content">
          <h1 className="glitch">
            <Link to={"/app"}>&#91; What Is Life? &#93;</Link>
          </h1>
          <h1 className="glitch">
            <Link to={"/app"}>&#91; What Is Life? &#93;</Link>
          </h1>
          <h1 className="glitch">
            <Link to={"/app"}>&#91; What Is Life? &#93;</Link>
          </h1>
        </div>

        <div className="app-bottom">
          <h3>Momento Mori </h3>
          <div className="app-img-container">
            <img src={Rose} alt="life is like a rose, beutiful but hurts" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
