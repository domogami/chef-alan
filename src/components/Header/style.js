import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  margin: 0;
  top: 0%;
  left: 3%;
  right: 3%;
  background-color: rgba(239, 238, 238, 0.8);
`
export const Logo = styled.img`
  width: 100px;
  height: auto;
`

export const Text = styled.div`
  margin-left: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
export const SectionLink = styled.a`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  text-decoration: none;
  font-size: 1.6em;
  color: var(--main-bg-color);
`
