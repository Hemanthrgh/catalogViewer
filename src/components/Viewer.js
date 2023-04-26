import React from 'react'

function Viewer({ file }) {
  return (
    <div className='layout-row viewer'>
      <img 
        alt='catalog-view' 
        src={file.image}
      />
      <span className="file-details">{file.details}</span>
    </div>
  )
}

export default Viewer

