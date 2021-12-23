import React from 'react'
import Avatar from '../../images/avatar.jpeg'
import {
  HeroContainer,
  PhotoTextContainer,
  ImageContainer,
  SubTitle,
  TextContainer,
  Title,
  HeroPhoto,
} from './style'
import { GreenText } from '../../styles/globalStyle'

export default function Hero(props) {
  return (
    <HeroContainer>
      <PhotoTextContainer>
        <ImageContainer>
          <HeroPhoto src={Avatar} alt="Profile" className="profile-img" />
        </ImageContainer>
        <TextContainer>
          <Title>
            Chef <GreenText>Alan</GreenText>
          </Title>
          <SubTitle>
            Senior Manager of R <GreenText>&</GreenText> D <br />
            at the Cheesecake Factory
          </SubTitle>
        </TextContainer>
      </PhotoTextContainer>
    </HeroContainer>
  )
}
