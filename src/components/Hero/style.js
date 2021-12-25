import styled from 'styled-components'
import { device } from '../../styles/globalStyle'

export const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  @media ${device.mobileL} {
    height: 100vh;
  }
`
export const PhotoTextContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  flex-direction: column;
  align-items: center;
  margin: auto auto auto auto;
  position: absolute;
  max-width: 1300px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  @media ${device.mobileL} {
    max-width: 320px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

`
export const ImageContainer = styled.div`
  margin: auto 10% auto auto;
  width: 25vw;
  height: auto;
  border-radius: 1.7em;
  overflow: hidden;
  @media ${device.mobileL} {
    margin: 15vh auto auto auto;
    width: auto;
  } 
`
export const HeroPhoto = styled.img`
  width: 30vw;
  height: auto;
  margin: auto;
  border-radius: 1.7em;
  @media ${device.mobileL} {
    width: 75vw;
  }
`
export const FancyRectangle = styled.div`
  background-color: var(--main-bg-color);
  width: 10px;
  height: 400px;
  align-self: center;
  margin: auto;
`
export const TextContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  align-items: left;
  text-align: justify;
  padding-left: 30px;
  border-left: 10px solid var(--main-bg-color);
  @media ${device.mobileL} {
    margin-top: 0;
    align-self: baseline;
  }
`
export const Title = styled.h1`
  align-self: left;
  margin-bottom: 20px;
  @media ${device.mobileL} {
    font-size: 2em;
  }
`

export const SubTitle = styled.h2`
  margin-top: 0;
  max-width: 400px;
  @media ${device.mobileL} {
    font-size: 1.2em;
  }
`
