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

export default function ExperienceCard(props) {
  return (
    <ExperienceContainer>
      <XImageContainer>
        <XImage src={props.Image} alt="Image" />
      </XImageContainer>
      <XFancyRectangle />
      <XTextContainer>
        <XText>
          {props.Title1}
          <GreenText>{props.GreenText}</GreenText>
          {props.Title2}
          <br />
        </XText>
        <XPositionText>{props.SubText}</XPositionText>
        <XSubText>{props.SubText1}</XSubText>
      </XTextContainer>
    </ExperienceContainer>
  )
}
