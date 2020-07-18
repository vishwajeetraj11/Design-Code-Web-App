import React from 'react'
import styled from 'styled-components'
import Wave from './Wave';

const SectionGroup = styled.div`
background:url(${props=>props.image});
height:720px;
background-size: cover;
display: grid;
grid-template-rows: 300px auto;
grid-gap: 20px;
position: relative;

@media(max-width: 900px) {
    height: 820px;
} 
@media(max-width: 600px) {
    height: 920px;
} 
`

const SectionLogo = styled.img`
align-self: end;
width: 128px;
margin: 0 auto;
`

const SectionTitleGroup = styled.div`
display: grid;
grid-template-columns: 300px auto;
grid-template-rows: auto 100%;
margin: 0 4rem;
grid-gap: 4rem;
margin-top: 2rem;

@media(max-width: 720px) {
    grid-template-columns: 1fr;
}

`

const SectionTitle = styled.h3`
color: #fff;
font-size: 6rem;
margin: 0;
line-height: 1.2;

@media(max-width: 720px) {
    font-size: 4rem;
}
`

const SectionText = styled.h3`
color: #fff;
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -8px;
    transform: rotate(180deg);
    `
const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -7px;
    `

const Section = props => (
  <SectionGroup image={props.image}>
  <WaveTop>
  <Wave />
  </WaveTop>
  <WaveBottom>
  <Wave />
  </WaveBottom>
    <SectionLogo src={props.logo}/>
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
)

export default Section
