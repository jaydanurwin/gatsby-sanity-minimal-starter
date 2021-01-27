import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  root {
  }

  .footerWrapper {
    box-sizing: border-box;
    max-width: 960px;
    padding: 4.5em 1.5em 0 1.5em;
    margin: 0 auto;

    @media (min-width: 450px) {
      padding: 6em 2em 1em 2em;
    }
  }
  .siteInfo {
    text-align: center;
    font-size: var(--font-small-size);
    line-height: var(--font-small-line-height);
  }
`

export default function Footer() {
  return (
    <FooterStyles>
      <div className="footerWrapper">
        <div className="siteInfo">
          &copy; {new Date().getFullYear()} Jaydan Urwin
        </div>
      </div>
    </FooterStyles>
  )
}
