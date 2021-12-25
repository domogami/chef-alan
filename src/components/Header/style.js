import styled from 'styled-components'
import { device } from '../../styles/globalStyle'

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  top: 0%;
  padding-left: 3%;
  padding-right: 2%;
  background-color: rgba(239, 238, 238, 1);
  z-index: 10;
  width: 100vw;
  @media ${device.mobileL} {
    padding: 0;
    grid-template-columns: 1fr 3fr;
    width: 100vw;
  }
`
export const Logo = styled.img`
  width: 100px;
  height: auto;
  @media ${device.mobileL} {
    width: 65px;
    margin: auto;
  }
`

export const Text = styled.div`
  margin-left: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media ${device.mobileL} {
    margin: auto;
  } 
`
export const SectionLink = styled.a`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  text-decoration: none;
  font-size: 1.3em;
  padding: 0 20px;
  color: var(--main-bg-color);
  @media ${device.mobileL} {
    font-size: .8em;
    padding: 0 5px;
    margin: auto;
  }
`
