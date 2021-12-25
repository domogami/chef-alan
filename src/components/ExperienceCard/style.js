import styled from 'styled-components'
import { device } from '../../styles/globalStyle'

export const ExperienceContainer = styled.div`
  padding-top: 5%;
  padding-bottom: 5%;
  display: grid;
  grid-template-columns: 1.1fr 0.05fr 2fr;
  align-items: center;
  place-items: center;
  max-width: 90vw;
  align-self: center;
  margin: auto;
  @media ${device.mobileL} {
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: 1fr 1fr;
   margin: auto;
  }
`
export const XImageContainer = styled.div`
  margin: auto;
`
export const XImage = styled.img`
  min-width: 240px;
  width: 20vw;
  max-width: 400px;
  border-radius: 1.7em;
  margin-right: 0%;
  margin-left: 0%;
  @media ${device.mobileL} {
   width: 50px;
  }
`
export const XTextContainer = styled.div`
@media ${device.mobileL} {
   grid-row: 2;
   margin-left: 0;
   border-left: 10px solid var(--main-bg-color);
  }
`
export const TextContainer = styled.div``

export const XText = styled.h1`
  padding-left: 10%;
  font-size: 2em;
  @media ${device.mobileL} {
   font-size: 1.5em;
  }
`
export const XPositionText = styled.h2`
  padding-left: 10%;
  font-size: 1.5em;
  @media ${device.mobileL} {
   font-size: 1.2em;
  }
`
export const XSubText = styled.p`
  padding-left: 10%;
  font-size: 1.2em;
  @media ${device.mobileL} {
   font-size: 1em;
  }
`
export const XFancyRectangle = styled.div`
  background-color: var(--main-bg-color);
  width: 10px;
  height: 100%;
  align-self: center;
  margin: auto;
  @media ${device.mobileL} {
   display: none;
  }
`
