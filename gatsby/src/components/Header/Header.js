import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderStyles = styled.div`
  padding: 1rem 0 0.5rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  a{
    margin-right: 1rem;
    &::last-of-type{
      margin-right: 0;
    }
  }
`

const Header = () => (
  <HeaderStyles>
    <Link to="/">Home</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/contact">Contact</Link>
  </HeaderStyles>
)

export default Header
