import React from 'react'
import { ArtContainer, ArtDescription, BsBookmarkHeartCustom, ImageContainer, DescriptionContent } from '../App.style'

export default function Art({ src, description, price }) {
  console.log('src ', src)
  return (
    <ArtContainer>
        <ImageContainer src={src}></ImageContainer>
        <ArtDescription> 
          <DescriptionContent><b>{description}</b></DescriptionContent>
          {/* <BsBookmarkHeartCustom/> */}
        </ArtDescription>
    </ArtContainer>
  )
}
