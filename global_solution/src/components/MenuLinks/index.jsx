import { Link } from "react-router-dom";


export default function MenuLinks (){
    return(
        <div className="main-container">
          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/faleconosco">Fale Conosco</Link>
              </li>
              <li>
                <Link to="/fatos">Fatos</Link>
              </li>
              <li>
                <Link to="/inseguranca">Insegurança</Link>
              </li>
              <li>
                <Link to="/agricultura-sustentavel">
                  Agricultura Sustentavel
                </Link>
              </li>
            </ul>
          </nav>
        </div>
    )
}