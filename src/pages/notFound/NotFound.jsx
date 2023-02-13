
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import './notFound.css'

const NotFound = () => {
  return (
    <section>
      <div className="contaisner notfound__container">
        <h2> Acho que você se perdeu pequeno investidor :( </h2>
        <Link to="/" className='btn'>Volte para casa <AiFillHome/></Link>
      </div>
    </section>
    )
}

export default NotFound