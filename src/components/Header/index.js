import React from 'react'
import LogoSrc from '../../images/logo.png'
import { HeaderContainer, Text, Logo, SectionLink } from './style'

export default function Header(props) {
  return (
    <HeaderContainer>
      <Logo src={LogoSrc} alt="logo"></Logo>
      <Text className="HeaderText">
        <SectionLink>About</SectionLink>
        <SectionLink>Showcase</SectionLink>
        <SectionLink>Contact</SectionLink>
      </Text>
    </HeaderContainer>
  )
}
