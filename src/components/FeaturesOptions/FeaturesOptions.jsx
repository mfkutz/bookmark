import { useState } from 'react'
import './FeaturesOptions.css'

const FeaturesOptions = () => {

  const [btnActive, setBtnActive] = useState(false)

  return (
    <section id='featuresOp'>

      <div className="menu_features">
        <div className={`btn_features ${btnActive ? '' : 'active'}`} onClick={() => setBtnActive(true)}>
          Simple Bookmarking
        </div>
        <div className='btn_features'>
          Speedy Searching
        </div>
        <div className='btn_features'>
          Easy Sharing
        </div>
      </div>

    </section>
  )
}

export default FeaturesOptions