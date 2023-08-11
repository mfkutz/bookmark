import './Footer.css'
import Logo from '../Logo/Logo'
import { RiFacebookBoxFill, RiTwitterFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">

        <div className='footer_nav'>
          <a href="#">
            <Logo icon={'#5267DF'} tape={'#FFF'} fontColor={'#FFF'} />
          </a>
          <ul className='links_social'>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="social">

          <a href="">
            <RiFacebookBoxFill color='white' size='32px' className='socialIcon' />
          </a>

          <a href="">
            <RiTwitterFill color='white' size='30px' className='socialIcon' />
          </a>

        </div>


      </div>
    </footer>
  )
}

export default Footer