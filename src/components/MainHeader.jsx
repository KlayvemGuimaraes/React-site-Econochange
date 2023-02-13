import {Link} from 'react-router-dom'
import Image from '../images/mainHeaderImage.png'
import {FaMoneyBillWave} from 'react-icons/fa'
import {GiPayMoney} from 'react-icons/gi'
import {TbZoomMoney} from 'react-icons/tb'
import {GiTakeMyMoney} from 'react-icons/gi'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import {FaMoneyCheckAlt} from 'react-icons/fa'

const MainHeader = () => {
  return (
    <header className="main__header"> 
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4 id='icons-money'><FaMoneyBillWave/><GiPayMoney/><TbZoomMoney/><GiTakeMyMoney/><RiMoneyDollarCircleFill/><FaMoneyCheckAlt/></h4>
          <h1>Educação Financeira para controle de gastos.</h1>
          <p> 
            Um aplicativo de organização financeira e controle de gastos com benefícios exclusivos na palma da sua mão!  
          </p>
          <Link to='/about' className='btn lg'>Saiba mais!</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header img"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader 