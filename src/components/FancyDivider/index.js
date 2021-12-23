import React from 'react'
import Triangle from '../../images/triangle.svg'
import {
  BackgroundImage,
  Divider,
  LowerTriangle,
  Title,
  UpperTriange,
} from './style'

export default function FancyDivider(props) {
  return (
    <Divider>
      <UpperTriange src={Triangle} alt="Triangle" className="Triangle" />
      <BackgroundImage
        src={props.Image}
        className="DividerBG"
      ></BackgroundImage>
      <LowerTriangle src={Triangle} alt="Triangle" className="Triangle2" />
      <Title>{props.Title}</Title>
    </Divider>
  )
}
