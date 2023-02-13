import Header from '../../components/Header'
import HeaderImage from '../../images/BannerHeader/BannerEcono.png'
import Card from '../../UI/Card'
import {plans} from '../../data'

import './plans.css'

const Plans = () => {
  return (
    <>
    <Header title="Empresas" image={HeaderImage}>
      Local reservado para empresas que possuem interesse em educar seus clientes ou funcionários da melhor forma.
    </Header>
    <section className='plans'>
      <div className='container plans__container'>
        {
          plans.map(({id, name, desc, price, features}) => {
            return <Card key={id} className="plan">
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`R$ ${price}`}</h1><h2>/mês</h2>
              <h4>características</h4>
              {
                features.map(({feature, available}, index) => {
                  return <p key={index} className={!available ? 'disasbled' : ''}>
                  {feature}</p>
                })
              }
              <button className='btn lg'>Contatar</button>
            </Card>
          })
        }
      </div>
    </section>
    </>
    )
}

export default Plans