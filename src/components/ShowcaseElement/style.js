import styled from 'styled-components'
import { device } from '../../styles/globalStyle'

export const ElementContainer = styled.div`
  width: 100vw;
  max-width: 1300px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 0.05fr 1fr;
  @media ${device.mobileL} {
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: 1fr 1fr;
   margin: auto;
  }
`
export const SCTextContainer = styled.div`
  text-align: right;
  max-height: 500px;
  padding: 10%;
  margin: auto;
  max-width: 500px;
  @media ${device.mobileL} {
    border-right: 10px solid var(--main-bg-color);
    max-width: 200px;
  }
`
export const SCFancyRectangle = styled.div`
  background-color: var(--main-bg-color);
  width: 10px;
  height: 400px;
  align-self: center;
  margin: auto;
  @media ${device.mobileL} {
   display: none;
  }
`
export const SCMirrorTextContainer = styled.div`
  text-align: left;
  max-height: 500px;
  padding: 10%;
  margin: auto;
  max-width: 500px;
  @media ${device.mobileL} {
    border-left: 10px solid var(--main-bg-color);
    max-width: 200px;
  }
`
export const SCImageContainer = styled.div`
  margin: auto;
  padding: 10%;
`
export const SCMirrorImageContainer = styled.div`
  padding: 10%;
  margin: auto;
`
export const SCImage = styled.img`
  border-radius: 1.7em;
  max-height: 400px;
  width: auto;
  object-fit: cover;
  @media ${device.mobileL} {
    max-width: 300px;
  }
`

export const SCText = styled.h2`
padding-bottom: 15px;
`
export const SCRectangleContainer = styled.div`
  margin: auto;
`
export const SCSubText = styled.p`
  /* font-size: 1.5em; */
`

export const SCGreenText = styled.span`
  color: var(--main-bg-color);
`
