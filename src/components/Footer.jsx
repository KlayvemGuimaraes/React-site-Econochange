import {Link} from 'react-router-dom'
import Logo from '../images/EconoLogoRemoveBackground.png'
import {FaTiktok} from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai' 


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to ="/" className='logo'>
                    <img src={Logo} alt="footer logo" />
                </Link>
                <p>
                   Porque todos sabem o valor do seu dinheiro.    
                </p>
                <div className="footer__socials">
                    <a href="https://www.tiktok.com/@econochange" target="_blank" rel='noreferrer noopener'><FaTiktok/
                    ></a>
                   
                    <a href="https://instagram.com/econochange" target="_blank" rel='noreferrer noopener'><AiFillInstagram/
                    ></a>
                </div>
            </article>

            <article>
                <h4>Links</h4>
                <Link to="/about">Sobre</Link>
                <Link to="/trainers">Membros</Link>
                <Link to="/gallery">Galeria</Link>
                <Link to="/contact">Contato</Link>
            </article>

            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Parcerias</Link>
                <Link to="/s">Eventos</Link>
                <Link to="/s">Comunidades</Link>
                <Link to="/s">FAQs</Link>
            </article>

            <article>
                <h4>Serviços</h4>
                <Link to="/contact">Contate-nos</Link>
                <Link to="/s">Suporte</Link>
                <Link to="/s">Para empresas</Link>
                <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMSqNGSKxjrrrCztpRZCTqTqpkcDZtDvCPbqbQRLZlCnljDqfwmxZZqTwPWjwDMXmXqzGzr'
                 target="_blank" rel='noreferrer'>Nos mande um e-mail</a>

            </article>
        </div>
        <div className="footer__copyright">
            <small>2023 Econochange &copy; Todos direitos reservados</small>
        </div>
    </footer>   
    )
}

export default Footer