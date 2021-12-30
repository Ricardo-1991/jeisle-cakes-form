import '../Header/StylesHeader.css'
import logo from '../../images/bolo_nome_empresa_lateral.png'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'


export const Header = () => {
  return (
    <header className="header-container">
      <div className='content-box-header'>
          <div>
          <img src={logo} alt="imagem-logo" className='logo-empresa' />
          </div>
        <div>
          <ul className='header-list'>
            <li>
              <div className='div-icons'>
                <a href="https://instagram.com/jeislecakes?utm_medium=copy_link">
                  <BsInstagram size={23} color='#71431f'/>
                </a>
              </div>
            </li>
            <li>
              <div className='div-icons'>
                <a href="https://mywhats.net/JeisleCakes">
                  <BsWhatsapp size={23} color='#71431f' className='icon' />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-div">
        <h1>Menu da Confeiteira</h1>
      </div>
    </header>
  )
}
