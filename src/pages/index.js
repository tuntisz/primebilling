import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Who we are</h2>
                </header>
                <p>
                  Sed lorem ipsum dolor sit amet nullam consequat feugiat
                  consequat magna adipiscing magna etiam amet veroeros. Lorem
                  ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem
                  ipsum dolor sit amet aliquam.
                </p>
                <ul className="actions">
                  <li>
                    {/* <Link to="/generic" className="button special">
                      Learn More
                    </Link> */}
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <form action="https://getform.io/f/530e1053-d4e1-4899-a2f0-de44bc7e92f0" method="POST">
            <header className="major">
              <h2>Contact Us</h2>
            </header>
              <ul className="features">
                <li>
                  <label for="name">What's your name?</label>
                  <input type="text" name="name"></input>
                </li>
                <li>
                  <label for="email">What's your email?</label>
                  <input type="email" name="email"></input>
                </li>
                <li>
                  <label for="email">How can we help?</label>
                  <textarea name="message" rows="5"></textarea>
                </li>
              </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <input type="submit" value="Send" className="button special" />
                </li>
              </ul>
            </footer>
            </form>
          </section>  
        </div>
      </Layout>
    )
  }
}

export default Index
