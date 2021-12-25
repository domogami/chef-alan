import React from 'react'
import LogoSrc from '../../images/logo.png'
import { HeaderContainer, Text, Logo, SectionLink } from './style'

export default function Header(props) {

  return (
    <HeaderContainer>
      <Logo src={LogoSrc} alt="logo"></Logo>
      <Text className="HeaderText">
        <SectionLink href="#Showcase">Showcase</SectionLink>
        <SectionLink href="#Experience">Experience</SectionLink>
        <SectionLink href="#Contact">Contact</SectionLink>
      </Text>
    </HeaderContainer>
  )
}
