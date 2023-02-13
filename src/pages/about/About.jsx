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
            Nós somos a Econochange, uma startup focada em educação financeira para jovens!    
            Com uma linguagem moderna e divertida, queremos passar conhecimento de forma simples e empolgante, com memes, posts, cursos e muito mais!
          </p>
            Criada com o intuito de educar jovens, desbancamos muitas equipes e agora estamos na final do desafio liga jovem, organizado pela {Sebrae} e {IdeiasdeFuturo}.
         
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className='about__section-content'>
          <h1>Nossa missão</h1>
          <p>
            Nosso compromisso é orientar e ajudar os jovens brasileiros á se organizarem financeiramente, visto que cerca de <strong><span>90%</span></strong> dos brasileiros <strong><span>admitem</span></strong> terem
            necessidade de educação financeira, aponta estudo em parceria com a Xpeed, braço de educação financeira da XP investimentos.
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
            Nossa pretenção neste momento, é começar o desenvolvimento do aplicativo visto que já temos o protótipo em funcionamento.
          </p>

          <p>
            
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