import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg'
import { ReactComponent as LinkedinIcon } from './linkedin.svg'
import { ReactComponent as InstagramIcon } from './instagram.svg'

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/luiz-gustavo-oliveira-a9b329176/">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/luiz.gustavogz/">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;