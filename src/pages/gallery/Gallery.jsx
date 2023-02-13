import Header from '../../components/Header'
import HeaderImage from '../../images/BannerHeader/BannerEcono.png'

import './gallery.css'

const Gallery = () => {
  const galleryLength = 18;
  const images = [];
  const confira = <a target= "_blank" href ='https://www.tiktok.com/@econochange'><span>Educação Financeira</span></a>;
    
  for(let i = 1; i <= galleryLength; i++) {
      images.push(require(`../../images/interviwed/interviwed${i}.jpg`))
    }

  return (
    <>
      <Header title="Confira nossas entrevistas" image={HeaderImage} className="interview-text">
        Fizemos dezenas de entrevistas com jovens, para avaliar como eles tratam de {confira}.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt="photos" />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery