import { useState } from 'react'
import './FeaturesOptions.css'

import { illustration1, illustration2, illustration3 } from '../../assets/index'

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


      <div className='description_features'>

        <div className='description_left'>
          <img src={illustration1} alt="" className={`imgIllustration ${btnOne ? 'active' : 'disabled'}`} />
          <img src={illustration2} alt="" className={`imgIllustration ${btnTwo ? 'active' : 'disabled'}`} />
          <img src={illustration3} alt="" className={`imgIllustration ${btnThree ? 'active' : 'disabled'}`} />

          <div className='type_description'>
          </div>

        </div>

        <div className='description_right'>

          <div className={`simple  ${btnOne ? 'active' : 'disabled'}`}>
            <h2>
              Bookmark in one click
            </h2>
            <p>
              Organize your bookmarks however you like. Our simple drag-and-drop interface
              gives you complete control over how you manage your favourite sites.
            </p>
            <a href="#" className='btn_info'>
              More Info
            </a>
          </div>

          <div className={`simple  ${btnTwo ? 'active' : 'disabled'}`}>
            <h2>
              Intelligent search
            </h2>
            <p>
              Our powerful search feature will help you find saved sites in no time at all.
              No need to trawl through all of your bookmarks.
            </p>
            <a href="#" className='btn_info'>
              More Info
            </a>
          </div>

          <div className={`simple  ${btnThree ? 'active' : 'disabled'}`}>
            <h2>
              Share your bookmarks
            </h2>
            <p>
              Easily share your bookmarks and collections with others. Create a shareable
              link that you can send at the click of a button.
            </p>
            <a href="#" className='btn_info'>
              More Info
            </a>
          </div>

        </div>

      </div>


    </section>
  )
}

export default FeaturesOptions