import React, { useState } from 'react'
import Link from 'gatsby-link'
import './Header.css'

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
          <Link to="/buy">
            <button className="header-btn">Buy</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
