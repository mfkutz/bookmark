import { useState } from 'react'
import './FeaturesOptions.css'

const FeaturesOptions = () => {

  const [btnOne, setBtnOne] = useState(true)
  const [btnTwo, setBtnTwo] = useState(false)
  const [btnThree, setBtnThree] = useState(false)

  function selectorOne() {
    setBtnOne(true)
    setBtnTwo(false)
    setBtnThree(false)
  }
  function selectorTwo() {
    setBtnOne(false)
    setBtnTwo(true)
    setBtnThree(false)
  }
  function selectorThree() {
    setBtnOne(false)
    setBtnTwo(false)
    setBtnThree(true)
  }

  return (
    <section id='featuresOp'>

      <div className="menu_features">
        <div className={`btn_features ${btnOne ? 'active' : ''}`} onClick={selectorOne}>
          Simple Bookmarking
        </div>
        <div className={`btn_features ${btnTwo ? 'active' : ''}`} onClick={selectorTwo}>
          Speedy Searching
        </div>
        <div className={`btn_features ${btnThree ? 'active' : ''}`} onClick={selectorThree}>
          Easy Sharing
        </div>
      </div>

    </section>
  )
}

export default FeaturesOptions