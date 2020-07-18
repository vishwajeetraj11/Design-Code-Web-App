import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave';
import staticData from '../../staticData.json';
import Cell from '../components/Cell';
import styled from 'styled-components'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1 className="heading-primary">
          Learn to <br /> design and code React apps
        </h1>
        <p className="heading-paragraph">
          Complete courses about the best tools and design systems. Prototype
          and build apps with React and Swift
        </p>
        <Link to="/page-2/">Watch the video</Link>

        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>

        <Wave />
        
      </div>
    </div>

    <div className="Cards">
      <h2>11 courses, more coming</h2>

      <div className="CardsGroup">

      <Card 
      title="React System"
      text="10 sections"
      image={require('../images/wallpaper.jpg')} 
      />
      <Card 
      title="React for Designers"
      text="12 sections"
      image={require('../images/wallpaper2.jpg')} 
      />
      <Card 
      title="Sound Design"
      text="5 sections"
      image={require('../images/wallpaper3.jpg')} 
      />
      <Card 
      title="ARKit 2"
      text="10 sections"
      image={require('../images/wallpaper4.jpg')} 
      />
      
      </div>

    </div>

    <Section
    image={require('../images/wallpaper2.jpg')} 
    logo={require('../images/logo-react.png')} 
    title="React for Designers"
    text="Learn how to build a modern site using React and the most effecient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />

    <SectionCaption>12 sections &mdash; 6 hours</SectionCaption>
    <SectionCellGroup>
    {
      staticData.cells.map(cell => (
        <Cell key={cell.title} title={cell.title} image={cell.image} />
        ))
    }
    </SectionCellGroup>

  </div>
)

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export default IndexPage
