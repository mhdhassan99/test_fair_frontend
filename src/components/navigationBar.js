import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, NavDropdown, Button, DropdownButton, Dropdown } from "react-bootstrap";

import '../styles/navigationBar.css';

export default class NavigationBar extends Component {
  state = {
    isLoggedIn: false
  }

  componentDidMount() {
    console.log('nav props',this.props)
    if (this.props.isLoggedIn) {
      this.setState({isLoggedIn: true})
    }
  }
  componentDidUpdate(prevProps) {
    // console.log('navbar', this.props, prevProps)
    if (this.props.isLoggedIn !== prevProps.isLoggedIn) {
      this.setState({isLoggedIn: this.props.isLoggedIn})
    }
  }


  handleRedirectLogin = () => {
    this.props.history.push('/login')
  }

  handleLogout = () => {
    this.props.handleLogout();
    this.setState({
      isLoggedIn: false
    })
  }

  handleCartRedirect = () => {
    if (!this.props.user?.id) {
      this.props.history.push('/login')
      return false;
    } else {
      this.props.history.push('/cartPage')
    }
  }


  render() {
    // console.log(this.state)
    return (
      <div>
        <div className="navBarContainer">
          <Navbar bg="light" expand="lg" className="navBar">
            <Navbar.Brand href="/">
            <img
            className="navbarLogo"
            src="https://img.icons8.com/clouds/100/000000/shopify.png"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link> */}
                  <Button
                    variant="success"
                    className="navBarBrowseButton"
                    onClick={() => this.props.history.push('/browse')}
                  >Browse</Button>
                <DropdownButton id="dropdown-basic-button" title="Categories" onChange={this.changeHandler}>
                  <Dropdown.Item href="/sofas">Sofas</Dropdown.Item>
                  <Dropdown.Item href="/coffeeTables">Coffee Tables</Dropdown.Item>
                  <Dropdown.Item href="/sectionals">Sectionals</Dropdown.Item>
                  <Dropdown.Item href="/chaiseLoungeChairs">Chaise Lounge Chairs</Dropdown.Item>
                  <Dropdown.Item href="/tvStands">Tv Stands</Dropdown.Item>
                </DropdownButton>
              </Nav>
              <button
                className="navBarCartImageContainer"
                onClick={this.handleCartRedirect}
              >
                <img
                  className="navBarCartImage"
                  src="https://img.icons8.com/dusk/64/000000/buy.png"
                />
                <span className="navBarCartText">Cart</span>
              </button>

              {this.state.isLoggedIn ?
                <>
                  <Navbar.Text className="navbarSignedin">
                    Signed in as: <a>{this.props.user?.username}</a>
                  </Navbar.Text>
                  <Button variant="danger"
                    onClick={this.handleLogout}
                  >Log Out</Button>
                </>
              :
                <>
                  <Button
                    variant="primary"
                    className="navBarLoginButton"
                    onClick={this.handleRedirectLogin}
                  >Log In</Button>
                  <Button
                    variant="success"
                    onClick={() => this.props.history.push('/signup')}
                  >Sign Up</Button>
                </>
              }
            </Navbar.Collapse>
          </Navbar>

        </div>
      </div>
    )
  }
}
