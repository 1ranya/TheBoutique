import React from 'react'
import { ContainerGallery, Title } from './Gallery.style'
import manSideLook from '../Statics/Portraits/man_side_look.jpg'
import womanChild from '../Statics/Portraits/woman_child.jpg'
import womanInnocence from '../Statics/Portraits/woman_innocence.jpg'
import womanLookDown from '../Statics/Portraits/woman_look_down.jpg'
import womanStrongLook from '../Statics/Portraits/woman_strong_look.jpg'
import Art from '../Components/Art'
import { Arts } from '../App.style'

export default function Gallery() {
    const arts = [
        {"src": manSideLook, desc: 'Side look'}, 
        {"src": womanChild, desc: 'Cuteness'}, 
        {"src": womanInnocence, desc: 'Innocence'}, 
        {"src": womanLookDown, desc: "Shyness"}, 
        {"src": womanStrongLook, desc: "Strong look"}, 
    ]
    return (
        <ContainerGallery>
            <Title> ART WORKS </Title>
            <Arts>
                { arts.map(art => (
                    <Art src={art.src} description={art.desc}/>
                ))}
            </Arts>
        </ContainerGallery>
    )
}
