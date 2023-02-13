import Image from '../images/Wallpaper/WallpaperEcono.png'
import ImageScreen from '../images/Wallpaper/WallpaperScreen.png'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className='values'>
        <div className='container values__container'>
            <div className="values__left">
                <div className="values__image">
                    <img src={ImageScreen} alt="img" className="WallpaperEcono"/>
                    <img src={Image} alt="img" className="WallpaperEcono"/>
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<GiCutDiamond/>} title="Pilares"></SectionHead>
                <p>
                Satisfazer o cliente é obrigação, o diferencial é mantê-lo encantado.
                </p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc}) => {
                            return <Card key={id} className="values__value">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }   
                </div>
            </div>   
        </div>
    </section>
    )
}

export default Values