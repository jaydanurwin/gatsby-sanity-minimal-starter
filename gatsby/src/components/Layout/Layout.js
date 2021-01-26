import React from "react"
import styled from 'styled-components'
import GlobalStyles from "../../styles/GlobalStyles"
import Typography from "../../styles/Typography"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const ContentStyles = styled.div`
  background: var(--dark-theme-background);
  min-height: calc(100% - 73px - 100px);

  @media (min-width: 450px) {
    min-height: calc(100% - 91px - 100px);
  }
`

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
    <GlobalStyles />
    <Typography />
    {this.props.noHeader ? null : <Header />}
    <ContentStyles>{children}</ContentStyles>
    {this.props.noFooter ? null : <Footer />}
  </>
    )
  }
}

export default Layout
