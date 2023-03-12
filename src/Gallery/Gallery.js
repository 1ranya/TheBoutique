import React, { useState } from 'react'
import { ContainerGallery, Title, Subtitle } from './Gallery.style'
import manSideLook from '../Statics/Portraits/man_side_look.jpg'
import womanChild from '../Statics/Portraits/woman_child.jpg'
import womanInnocence from '../Statics/Portraits/woman_innocence.jpg'
import womanLookDown from '../Statics/Portraits/woman_look_down.jpg'
import womanStrongLook from '../Statics/Portraits/woman_strong_look.jpg'
import Art from '../Components/Art'
import { Arts } from '../App.style'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Gallery() {
    const [ openBlackAndWhiteSection, setOpenBlackAndWhiteSection] = useState(true)
    // const [ openOthersSection, setOpenOthersSection] = useState(true)
    
    const arts = [
        {"src": manSideLook, desc: 'Side look', price: '20€'}, 
        {"src": womanChild, desc: 'Cuteness', price: '20€'}, 
        {"src": womanInnocence, desc: 'Innocence', price: '20€'}, 
        {"src": womanLookDown, desc: "Shyness", price: '20€'}, 
        {"src": womanStrongLook, desc: "Strong look", price: '20€'}, 
    ]
    return (
        <ContainerGallery>
            <Title> {arts.length} ART WORKS </Title>

            <Subtitle onClick={
                () => setOpenBlackAndWhiteSection(!openBlackAndWhiteSection)
            }> Black and white 
                { openBlackAndWhiteSection 
                    ?<IoIosArrowDown/> 
                    :<IoIosArrowUp/>
                }</Subtitle>
            {openBlackAndWhiteSection 
                && <Arts>
                    { arts.map(art => (
                        <Art src={art.src} description={art.desc} price={art.price}/>
                    ))}
                    </Arts>
            }
            {/* <Subtitle onClick={
                () => setOpenOthersSection(!openOthersSection)
            }> Others 
                { openOthersSection 
                    ?<IoIosArrowDown/> 
                    :<IoIosArrowUp/>
                }</Subtitle>
            {openOthersSection &&
                <Arts>
                    { arts.map(art => (
                        <Art src={art.src} description={art.desc} price={art.price}/>
                    ))}
                </Arts>
            } */}
        </ContainerGallery>
    )
}
