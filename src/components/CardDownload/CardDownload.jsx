import './CardDownload.css'
import { logoChrome, background } from '../../assets/index'

const CardDownload = ({ logo, title, version }) => {
    return (
        <>
            <img src={logo} alt="" className='logo_nav' />
            <h3 className='download_title'>
                {title}
            </h3>
            <p className='p_version'>
                Minimum version {version}
            </p>
            <img src={background} alt="" className='separator' />
            <div>
                <a href="#" className='btn_install'>
                    Add & Install Extension
                </a>
            </div>
        </>
    )
}

export default CardDownload