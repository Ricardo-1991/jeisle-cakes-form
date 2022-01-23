import '../Header/StylesHeader.css'
import logo from '../../images/bolo_nome_empresa_lateral.png'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'

export const Header = () => {
  return (
    <header className="header-container">
      <div className="content-box-header">
        <div>
          <img src={logo} alt="imagem-logo" className="logo-empresa" />
        </div>
        <div>
          <ul className="header-list">
            <li>
              <div className="div-icons">
                <a href="https://instagram.com/jeislecakes?utm_medium=copy_link">
                  <BsInstagram size={20} color="#E1306C" />
                </a>
              </div>
            </li>
            <li>
              <div className="div-icons">
                <a href="https://mywhats.net/JeisleCakes">
                  <BsWhatsapp size={20} color="#34af23" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
