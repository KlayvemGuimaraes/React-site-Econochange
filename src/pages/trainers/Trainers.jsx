import Header from '../../components/Header' 
import HeaderImage from '../../images/BannerHeader/BannerEcono.png'
import {trainers} from '../../data'
import {FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import Trainer from '../../components/Trainer'



import './trainers.css'

const Trainers = () => {
  return (
    <>
    <Header title="Membros" image={HeaderImage}>
    Confira todos membros da nossa startup.
    </Header>
    <section className="trainers">
      <div className="container trainers__container">
        {
          trainers.map(({id, name, image, job, socials}) => {
            return <Trainer key={id} image={image} name={name} job={job} socials={
              [
                {icon: <FaLinkedin/>, link: socials[0]},
                {icon: <MdEmail/>, link: socials[1]}
              ]
            }/>
          })
        }
      </div>
    </section>
    </>

    )
}

export default Trainers