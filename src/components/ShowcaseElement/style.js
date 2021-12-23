import styled from 'styled-components'

export const ElementContainer = styled.div`
  width: 100vw;
  max-width: 1300px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 0.05fr 1fr;
`
export const SCTextContainer = styled.div`
  text-align: right;
  max-height: 500px;
  padding: 10%;
  margin: auto;
  max-width: 500px;
`
export const SCMirrorTextContainer = styled.div`
  text-align: left;
  max-height: 500px;
  padding: 10%;
  margin: auto;
  max-width: 500px;
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
`

export const SCText = styled.h2``

export const SCSubText = styled.p`
  /* font-size: 1.5em; */
`

export const SCGreenText = styled.span`
  color: var(--main-bg-color);
`
