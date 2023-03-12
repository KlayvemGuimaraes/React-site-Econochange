import Header from '../../components/Header'
import BannerEcono from '../../images/BannerHeader/BannerEcono.png'
import Post1 from '../../images/Posts/post1.jpg'
import Post2 from '../../images/Posts/post2.jpg'
import Post3 from '../../images/Posts/post3.jpg'
import './about.css'

export const About = () => {
  
  const acessInstagram = <a href="https://www.instagram.com/p/CohZMdnOp9i/" target="_blank" rel='noreferrer'><span>Veja mais posts como esse!</span></a>
  const Sebrae = <a href='https://sebrae.com.br/sites/PortalSebrae' target="_blank" rel='noreferrer'><span>Sebrae</span></a>
  const IdeiasdeFuturo = <a href='https://ideiasdefuturo.com/' target="_blank" rel='noreferrer'><span>Ideias de futuro</span></a>

  return (
    <>
    <Header title="" image={BannerEcono}>
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className='about__section-image'>
          <img src={Post1} alt="imagem post" />
        </div>
        <div className='about__section-content'>
          <h1>Quem somos?</h1>
          <p>
            Então, sabe quando você precisa comprar aquela make ou aquela camisa do seu time
            favorito mas não soube como organizar o seu dinheiro e gastou tudo? Estamos aqui para resolver o seu problema!
          </p>
            Criada para ajudar vocês jovens, estamos na semifinal do Desafio Liga Jovem, organizado pela {Sebrae} e {IdeiasdeFuturo}.
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className='about__section-content'>
          <h1>Nossa missão</h1>
          <p>
          Nossa missão é ensinar á vocês tudo sobre educação financeira para conseguir salvar parte do seu dinheiro! Já que <strong><span>90%</span></strong> dos brasileiros
          segundo estudo em parceria com a XPEED, têm dificuldade em organizar sua bufunfa! Muita gente né?? 
          </p>

          <p>
            {acessInstagram}
          </p>
        </div>
        <div className='about__section-image'>
          <img src={Post2} alt="imagem post" />
        </div>
      </div>
    </section>


    <section className="about__mission">
      <div className="container about__mission-container">
        <div className='about__section-image'>
          <img src={Post3} alt="imagem post" />
        </div>
        <div className='about__section-content'>
          <h1>O que pretendemos </h1>
          <p>
           Sabendo dessas imensas dificuldades com o dinheiro, decidimos criar um aplicativo que consiga prender
           esse danadinho dentro do seu bolso! Além de te ajudar a ser organizado financeiramente com as suas metas!           
          </p>

          <p>
            {acessInstagram}
          </p>
        </div>
      </div>
    </section>

    </>
    )
}

export default About