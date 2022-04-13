import "../Header/StylesHeader.css";
import logo from "../../images/bolo_nome_empresa_lateral.png";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { BiMap } from "react-icons/bi";

export const Header = () => {
  return (
    <header className="header-container">
      <div className="content-box-header">
        <div>
          <a href="">
            <img src={logo} alt="imagem-logo" className="logo-empresa" />
          </a>
        </div>
        <div className="header-text">
          <h2>
            <BiMap size={25} />
            RESIDENCIAL SÃO JORGE - CEPLUS - ZONA SUL
          </h2>
          <br />
          <h2>Acesse nossas redes sociais!</h2>
        </div>

        <div className="container-icons">
          <ul className="header-list">
            <li>
              <div className="div-icons">
                <a href="https://instagram.com/jeislecakes?utm_medium=copy_link">
                  <BsInstagram size={20} color="#ff0055" />
                </a>
              </div>
            </li>
            <li>
              <div className="div-icons">
                <a href="https://mywhats.net/JeisleCakes">
                  <BsWhatsapp size={20} color="#19b604" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
