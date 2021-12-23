import styled from 'styled-components'

export const Divider = styled.div`
  width: 100vw;
  max-height: 50vh;
  display: grid;
  grid-template-columns: 1fr;
`

export const BackgroundImage = styled.img`
  object-fit: cover;
  grid-column: 1;
  grid-row: 1;
  object-fit: cover;
  grid-column: 1;
  grid-row: 1;
  max-height: 50vh;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  filter: brightness(0.7);
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`
export const UpperTriange = styled.img`
  object-fit: cover;
  grid-column: 1;
  grid-row: 1;
  z-index: 1;
  width: 100%;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`
export const LowerTriangle = styled.img`
  object-fit: cover;
  grid-column: 1;
  grid-row: 1;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  margin-top: auto;
  width: 100%;
  margin-bottom: -1px;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`
export const Title = styled.h1`
  grid-column: 1;
  grid-row: 1;
  margin: auto;
  z-index: 1;
  color: #efeeee;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`
