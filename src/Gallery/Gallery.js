import React, { useState } from 'react'
import { ContainerGallery, Title, Subtitle } from './Gallery.style'
import manSideLook from '../Statics/Portraits/man_side_look.jpg'
import womanChild from '../Statics/Portraits/woman_child.jpg'
import womanInnocence from '../Statics/Portraits/woman_innocence.jpg'
import womanLookDown from '../Statics/Portraits/woman_look_down.jpg'
import womanStrongLook from '../Statics/Portraits/woman_strong_look.jpg'
import tunisia from '../Statics/Portraits/discover_tunisia.jpg'
import orangeFace from '../Statics/Portraits/OrangeFace.jpg'
import oliveOil from '../Statics/Portraits/OliveOil.jpg'
import breakfast from '../Statics/Portraits/Breakfast.jpg'
import leaf from '../Statics/Portraits/Leaf.jpg'
import Art from '../Components/Art'
import { Arts } from '../App.style'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Gallery() {
    const [ openBlackAndWhiteSection, setOpenBlackAndWhiteSection] = useState(true)
    const [ openOthersSection, setOpenOthersSection] = useState(true)
    
    const arts = [
        {"src": manSideLook, desc: 'Side look', price: 0, status: 'forGalleryOnly', type: "isBlackAndWhite"}, 
        {"src": womanChild, desc: 'Cuteness', price: 0, status: 'forGalleryOnly', type: "isBlackAndWhite"}, 
        {"src": womanInnocence, desc: 'Innocence', price: 0, status: 'forGalleryOnly', type: "isBlackAndWhite"}, 
        {"src": womanLookDown, desc: "Shyness", price: 0, status: 'forGalleryOnly', type: "isBlackAndWhite"}, 
        {"src": womanStrongLook, desc: "Strong look", price: 0, status: 'forGalleryOnly', type: "isBlackAndWhite"}, 
        {"src": tunisia, desc: "Discover Tunisia", price: 0, status: 'Sold Out', type: "other"}, 
        {"src": orangeFace, desc: "The Sun", price: 0, status: 'available', type: "other"}, 
        {"src": oliveOil, desc: "Olive oil", price: 0, status: 'available', type: "other"}, 
        {"src": breakfast, desc: "Yummy breakfast", price: 0, status: 'available', type: "other"}, 
        {"src": leaf, desc: "The Leaf", price: 0, status: 'available', type: "other"}, 
    ]

    const ArtComponent = (props) => {
        const {art} = props
        return <Art 
                src={art.src} 
                description={art.desc} 
                price={art.price === 0 ? '' : art.price}
                status={art.status === 'forGalleryOnly' ? '' : art.status }
                />
    }
    
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
                    { arts.map(art => art.type === 'isBlackAndWhite' && <ArtComponent art={art}/>)}
                    </Arts>
            }
            <Subtitle onClick={
                () => setOpenOthersSection(!openOthersSection)
            }> Others 
                { openOthersSection 
                    ?<IoIosArrowDown/> 
                    :<IoIosArrowUp/>
                }</Subtitle>
            {openOthersSection &&
                <Arts>
                    { arts.map(art => art.type === 'other' && <ArtComponent art={art}/>)}
                </Arts>
            }
        </ContainerGallery>
    )
}
