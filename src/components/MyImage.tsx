import { data } from 'model/data'
import React from 'react'

function MyImage() {
    const { img } = data.about
    
    return (
        <div>
        <img className='w-50' src={img} alt='' />
      </div>
    )
}

export default MyImage
