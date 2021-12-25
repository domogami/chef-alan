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
import Fade from 'react-reveal/Fade';

export default function Hero(props) {
  return (
    <HeroContainer>
      <PhotoTextContainer>
        <Fade left>
          <ImageContainer>
            <HeroPhoto src={Avatar} alt="Profile" className="profile-img" />
          </ImageContainer>
        </Fade>
        <Fade top cascade delay={500}>
          <TextContainer>
            <Fade top cascade delay={1400}>
            <Title>
              Chef <GreenText>Alan</GreenText>
            </Title>
            <SubTitle>
              Senior Manager of R <GreenText>&</GreenText> D <br />
              at the Cheesecake Factory
            </SubTitle>
            </Fade>
          </TextContainer>
        </Fade>
      </PhotoTextContainer>
    </HeroContainer>
  )
}
