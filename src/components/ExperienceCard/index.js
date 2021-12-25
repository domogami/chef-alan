import React from 'react'
import {
  ExperienceContainer,
  XImageContainer,
  XImage,
  XTextContainer,
  XText,
  XSubText,
  XFancyRectangle,
  XPositionText,
} from './style'
import { GreenText } from '../../styles/globalStyle'
import { Fade } from 'react-reveal'

export default function ExperienceCard(props) {
  return (
    <ExperienceContainer>
      <XImageContainer>
        <Fade left>
          <XImage src={props.Image} alt="Image" />
        </Fade>
      </XImageContainer>
      <XFancyRectangle />
      <XTextContainer>
        <Fade right>
        <XText>
          {props.Title1}
          <GreenText>{props.GreenText}</GreenText>
          {props.Title2}
          <br />
        </XText>
        </Fade>
        <Fade right delay={500}>
        <XPositionText>{props.SubText}</XPositionText>
        <XSubText>{props.SubText1}</XSubText>
        </Fade>
      </XTextContainer>
    </ExperienceContainer>
  )
}
