import React, { Fragment, useState, useEffect } from 'react'

import { image1, image2, image3, image4 } from './assets/images'
import { Thumbs, Viewer } from './components'


function App() {
  const catalogsList = [
    {
      thumb: image1,
      image: image1,
      details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      thumb: image2,
      image: image2,
      details:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32."
    },
    {
      thumb: image3,
      image: image3,
      details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      thumb: image4,
      image: image4,
      details:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
    }
  ]

  const [ activeIndex, setActiveIndex ] = useState(0)
  const [ isSliding, setIsSliding ] = useState(false)
  // const [ slideTimer, setSlideTimer ] = useState(null)
  const [ slideDuration ] = useState(3000)

  const handleNextClick = () => {
    if (activeIndex === 3) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  }

  const handlePrevClick = () => {
    if (activeIndex === 0) {
      setActiveIndex(3)
    } else {
      setActiveIndex(activeIndex - 1);
    }
  }

  const handleThumbClick = (idx) => {
    setActiveIndex(idx);
  }

  const handleSliding = (e) => {
    const _val = e.target.checked;
    setIsSliding(_val);
  }

  useEffect(() => {
    if (isSliding) {
      const interval = setInterval(() => {
        handleNextClick();
      }, slideDuration);
      return () => clearInterval(interval);    
    }
  }, [isSliding, activeIndex]);

  return (
    <Fragment>
      <div className='layout-column'>
        <div className='layout-row'>
          <div className='card'>
            <Viewer file={ catalogsList[activeIndex]} />
            <div className='layout-row justify-content-center align-items-center mt-20'>
            <button 
              className="icon-only outlined"
              data-testid="prev-slide-btn"
              onClick={handlePrevClick}
            >
              <i className="material-icons">arrow_back</i>
            </button>
              <Thumbs 
                items={ catalogsList } 
                currentIndex={ activeIndex } 
                handleClick={handleThumbClick}
              />
            <button 
              className="icon-only outlined"
              data-testid="next-slide-btn"
              onClick={handleNextClick}
            >
              <i className="material-icons">arrow_forward</i>
            </button>
            </div>
          </div>
        </div>
        <div className='layout-row justify-content-center mt-25'>
          <input 
            type='checkbox'
            data-testid='toggle-slide-show-button'
            onChange={handleSliding}
          /> 
          <label className='ml-6'>Start Slide Show</label>
        </div>
      </div>
    </Fragment>
  )
}

export default App

