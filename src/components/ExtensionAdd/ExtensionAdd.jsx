import './ExtensionAdd.css'

import { logoChrome, logoFirefox, logoOpera } from '../../assets/index'
import CardDownload from '../CardDownload/CardDownload'

const ExtensionAdd = () => {
  return (
    <section id='download_extension'>

      <div className="card">
        <CardDownload logo={logoChrome} title={'Add to Chrome'} version={'62'} />
      </div>

      <div className="card two">
        <CardDownload logo={logoFirefox} title={'Add to Firefox'} version={'55'} />
      </div>

      <div className="card three">
        <CardDownload logo={logoOpera} title={'Add to Opera'} version={'46'} />
      </div>

    </section>
  )
}

export default ExtensionAdd