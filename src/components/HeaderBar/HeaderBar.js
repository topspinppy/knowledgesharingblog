import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap'
import { Avatar } from 'antd'
import styled from 'styled-components'
import { KS } from '../../images'
import { Header } from '../../constant/Header'

export default class HeaderBar extends Component {
  state = {
    isOpen: false,
    color: 'transparent',
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <Navbar color={this.state.color} light expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={KS} width="150px" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {Header.name.map((value, key) => {
                return (
                  <NavItem>
                    <NavLink href={Header.url[key]}>{value}</NavLink>
                  </NavItem>
                )
              })}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}
