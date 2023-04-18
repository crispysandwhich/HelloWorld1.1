import { Link } from 'react-router-dom'


import Rose from '../assets/images/Rose.png'


function Intro() {


  return (
    <section className='introSection'>

    <div className="introSection__content">
      
      <header className="introSection__header">
        <h2 className="app-title">$ad Inside</h2>
        <h3 className="app-realeased-date"> May 2020 </h3>
      </header>

      <div className="app-content">

        <p className='glitch'>
          <Link to={"/app"}>
            <span aria-hidden="true">&#91; What Is Life? &#93;</span>
            <span>&#91; What Is Life? &#93;</span>
            <span aria-hidden="true">&#91; What Is Life? &#93;</span>
          </Link>
        </p>

      </div>

      <div className="app-bottom">
        <h3>Momento Mori </h3>
        <div className="app-img-container">
          <img src={Rose} alt="life is like a rose, beutiful but hurts" />
        </div>
      </div>

    </div>


    </section>
  )
}

export default Intro