import React from 'react'
import { HeaderContainer, LogoContainer } from '../App.style';
import logo from '../Statics/logo_dark.png';

export default function Header() {
  return (
    <HeaderContainer>
        <LogoContainer src={logo}></LogoContainer>
    </HeaderContainer>
  )
}
