import '../Footer/StylesFooter.css'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'

export function Footer() {
  return (
    <footer className="form-footer">
      <h3>
        Contatos profissionais do desenvolvedor:{' '}
        <a href="https://www.linkedin.com/in/paulo-ricardo-santos-nascimento-400877211/">
          <BsLinkedin size={20} />
        </a>
        <a href="https://www.instagram.com/ricardo_n4scimento/">
          <BsInstagram size={20} />
        </a>
      </h3>
    </footer>
  )
}
