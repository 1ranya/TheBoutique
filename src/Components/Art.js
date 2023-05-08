import React from 'react'
import { ArtContainer, ArtDescription, ImageContainer, DescriptionContent, Status } from '../App.style'

export default function Art({ src, description, price, status }) {
  console.log('src ', src)
  return (
    <ArtContainer>
      {status && (<Status status={status}> {status} </Status>)}
      <ImageContainer src={src}></ImageContainer>
      <ArtDescription> 
        <DescriptionContent><b>{description}</b></DescriptionContent>
        {/* <BsBookmarkHeartCustom/> */}
      </ArtDescription>
    </ArtContainer>
  )
}
