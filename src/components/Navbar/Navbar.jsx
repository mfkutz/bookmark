import './Navbar.css'
import { iconHamburguer, iconClose, iconFacebook, iconTwitter } from '../../assets/index'
import { useState } from 'react'
import Logo from '../Logo/Logo'


const Navbar = () => {

    const [menuMobile, setMenuMobile] = useState(false)

    return (
        <>
            <nav>
                <div className="wrapper">
                    <div className={`${menuMobile ? 'potterCape' : ''}`}>
                        <a href="#">
                            <Logo icon={'#5267DF'} tape={'#FFF'} fontColor={'#242A45'} />
                        </a>
                    </div>
                    <ul className='menuDesktop'>
                        <li>
                            <a href="#" className='menu_option_desktop'>Features</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                        <li>
                            <a href="#" className='login'>Login</a>
                        </li>
                    </ul>
                    <img src={iconHamburguer} alt="hamburguer" className={`hamburguer ${menuMobile ? 'disabled' : ''}`} onClick={() => setMenuMobile(true)} />
                </div>
            </nav>

            {/* Mobile */}
            <div className={`menuMobile ${menuMobile ? 'active' : ''}`} >

                {/* header and options */}
                <div>
                    <div className='header_menu_mobile'>
                        <Logo icon={'#FFF'} tape={'hsl(229.01408450704224, 47.019867549668874%, 29.607843137254903%)'} fontColor={'#FFF'} />
                        <img src={iconClose} alt="" onClick={() => setMenuMobile(false)} />
                    </div>

                    <div className='menu_mobile_container'>
                        <div className='menu_option'>
                            <a href="#">Features</a>
                        </div>

                        <div className='menu_option'>
                            <a href="#">Pricing</a>
                        </div>

                        <div className='menu_option'>
                            <a href="#">Contact</a>
                        </div>

                        <div className='menu_option_special'>
                            <a href="#" className='btn_login_mobile'>Login</a>
                        </div>
                    </div>
                </div>

                {/* social */}
                <div className='social_container'>
                    <a href="#">
                        <img src={iconFacebook} alt="facebook" />
                    </a>
                    <a href="#">
                        <img src={iconTwitter} alt="twitter" />
                    </a>
                </div>

            </div >

        </>

    )
}
export default Navbar