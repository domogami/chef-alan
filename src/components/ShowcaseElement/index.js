import React from 'react'
import {
  ElementContainer,
  SCText,
  SCSubText,
  SCImageContainer,
  SCMirrorImageContainer,
  SCTextContainer,
  SCImage,
  SCMirrorTextContainer,
  SCFancyRectangle,
  SCRectangleContainer,
} from './style'
import { GreenText } from '../../styles/globalStyle'
import { Fade } from 'react-reveal'

export default function ShowcaseElement(props) {
  return (
    <ElementContainer>
      {props.Mirror ? (
        <>
          <SCTextContainer>
            <Fade left cascade delay={500}>
            <SCText>
              <GreenText>{props.Text}</GreenText>
              {props.Text2}
              <br />
              {props.Text3}
            </SCText>
            <Fade left cascade delay={700}>
              <SCSubText>{props.SubText}</SCSubText>
            </Fade>
            </Fade>
          </SCTextContainer>
          <SCRectangleContainer>
          <Fade top>
            <SCFancyRectangle />
          </Fade>
          </SCRectangleContainer>
          <SCImageContainer>
            <Fade right delay={500}>
              <SCImage src={props.Image} alt="Image" />
            </Fade>
          </SCImageContainer>
        </>
      ) : (
        <>
          <SCMirrorImageContainer>
            <Fade right delay={500}>
              <SCImage src={props.Image} alt="Image" />
            </Fade>
          </SCMirrorImageContainer>
          <SCRectangleContainer>
            <Fade right>
              <SCFancyRectangle />
              </Fade>
            </SCRectangleContainer>
          <SCMirrorTextContainer>
          <Fade right cascade delay={500}>
            <SCText>
                <GreenText>{props.Text}</GreenText>
                {props.Text2}
                <br />
                {props.Text3}
            </SCText>
            </Fade>
            <Fade right cascade delay={700}>
            <SCSubText>{props.SubText}</SCSubText>
            </Fade>
          </SCMirrorTextContainer>
        </>
      )}
    </ElementContainer>
  )
}
