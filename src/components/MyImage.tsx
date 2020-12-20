import { data } from 'model/data'
import React from 'react'

function MyImage() {
  const { img } = data.about

  return (
    <img src={img} alt='' />
  )
}

export default MyImage
