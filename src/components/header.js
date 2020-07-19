import React, { useState } from 'react'
import Link from 'gatsby-link'
import './Header.css'
import StripeCheckout from 'react-stripe-checkout'

class Header extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      hasScrolled: false
    }
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
    if(scrollTop > 50) {
      this.setState({hasScrolled: true})
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handlePruchase= (token) => {
    const amount = 5000
    const description = "My awesome product"
    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount
    }
    fetch('http://localhost:9000/stripe-charge', {
      method: 'POST',
      body: JSON.stringify(bodyObject)
    })
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'header HeaderScrolled' : 'header'}>
        <div className="header-group">
          <Link to="/">
            <img
              src={require('../images/logo-designcode.svg')}
              width="30"
              className="header-link-logo"
            />
          </Link>
          <Link className="header-links" to="/courses">
            Courses
          </Link>
          <Link className="header-links" to="/downloads">
            Downloads
          </Link>
          <Link className="header-links" to="/workshops">
            Workshops
          </Link>
          <StripeCheckout 
          amount={5000}
          image="https://cl.ly/0K2f1V3K3h0D/download/Logo.jpg"
          token={this.handlePruchase}
          stripeKey={'pk_test_51H6W1PAOe9uG4XYqevOuhfLtJeeMtUGemwASY5PtqZ6vOvp4VIUYtRcqoTdPX0geOhnMOYyMiUADOu5rXvVTYgE400lBYVHSKG'}
          >
          <button className="header-btn">Buy</button>
          </StripeCheckout>
          
        </div>
      </div>
    )
  }
}

export default Header
