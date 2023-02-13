import Header from '../../components/Header'
import HeaderImage from '../../images/Wallpaper/WallpaperheaderContato.png'
import {MdEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {SiTiktok} from 'react-icons/si'
import {IoLogoWhatsapp} from 'react-icons/io'

import './contact.css'


const Contact = () => {
  return (  
    <>
    <Header title="" image={HeaderImage}>
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="https://wa.me/+5511941732215" target="_blank" rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBmzrdLFJKfBSRcnxwPCsqkrxpHTsbKZWBsCgvWdCQdDMvrzbLDNdZJrVVVQGDGHkvvZVCW" target="_blank" rel='noreferrer noopener'><MdEmail/></a>
          <a href="https://www.instagram.com/econochange" target="_blank" rel='noreferrer noopener'><BsInstagram/></a>
          <a href="https://www.tiktok.com/@econochange" target="_blank" rel='noreferrer noopener'><SiTiktok/></a>
        </div>
      </div>
    </section>
    </>
    )
}

export default Contact