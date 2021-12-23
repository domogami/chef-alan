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
} from './style'
import { GreenText } from '../../styles/globalStyle'
import { FancyRectangle } from '../Hero/style'

export default function ShowcaseElement(props) {
  return (
    <ElementContainer>
      {props.Mirror ? (
        <>
          <SCTextContainer>
            <SCText>
              <GreenText>{props.Text}</GreenText>
              {props.Text2}
              <br />
              {props.Text3}
            </SCText>
            <SCSubText>{props.SubText}</SCSubText>
          </SCTextContainer>
          <FancyRectangle />
          <SCImageContainer>
            <SCImage src={props.Image} alt="Image" />
          </SCImageContainer>
        </>
      ) : (
        <>
          <SCMirrorImageContainer>
            <SCImage src={props.Image} alt="Image" />
          </SCMirrorImageContainer>
          <FancyRectangle />
          <SCMirrorTextContainer>
            <SCText>
              <GreenText>{props.Text}</GreenText>
              {props.Text2}
              <br />
              {props.Text3}
            </SCText>
            <SCSubText>{props.SubText}</SCSubText>
          </SCMirrorTextContainer>
        </>
      )}
    </ElementContainer>
  )
}
