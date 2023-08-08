import './Header.css'
import { background, illustrationHero, illustration1 } from '../../assets/index'

const Header = () => {
  return (
    <header>

      <div className="header-container">

        <div className="left">
          
           <h1>
            A Simple Bookmark <br />Manager
          </h1>
          <p>
            A clean and simple interface to organize your favourite websites. Open a new
            browser tab and see your sites load instantly. Try it for free.
          </p>
          <div className="buttons-container">
            <a href="#" className='btn-chrome'>Get it on Chrome</a>
            <a href="#" className='btn-firefox'>Get it on Firefox</a>
          </div>
        </div>

        <div className="right">
          
           <div className='target'>
          </div>
          <img src={illustrationHero} alt="" className='heroImage' />
        </div>

      </div>

    </header >
  )
}

export default Header