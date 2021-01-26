import React from 'react'
import styled from 'styled-components'
import youtubeSocialIcon from '../icon/youtube-icon-24px.svg'
import instagramSocialIcon from '../icon/instagram-glyph-24px.svg'
import twitterSocialIcon from '../icon/twitter-icon-24px.svg'
import githubSocialIcon from '../icon/github-icon-24px.svg'
import dribbbleSocialIcon from '../icon/dribbble-icon-24px.svg'

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
