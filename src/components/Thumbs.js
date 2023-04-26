import React, { Fragment } from 'react'

function Thumbs({ items, currentIndex, handleClick }) {
    
    return (
        <Fragment>
            {
                items.map((catalog, idx) => (
                    <span   
                        id={idx} 
                        key={idx} 
                        onClick={() => handleClick(idx)}
                    >
                        <span 
                                className={'thumb image-thumb ' + 
                                (idx === currentIndex ? 'thumb-selected' : '')} 
                                id={idx} 
                                style={{ backgroundImage: 'url('+ catalog.thumb + ')' }}
                            />
                        </span>
                ))
            }
        </Fragment>
    )
}

export default Thumbs

