import React from 'react'
import { ArtContainer, ArtDescription, ImageContainer } from '../App.style'

export default function Art({ src, description }) {
  console.log('src ', src)
  return (
    <ArtContainer>
        <ImageContainer src={src}></ImageContainer>
        <ArtDescription> {description} </ArtDescription>
    </ArtContainer>
  )
}
