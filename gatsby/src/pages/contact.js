import React from 'react'
import Container from '../components/Container/Container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/SEO/SEO'
import Layout from '../containers/layout'

const ContactPage = (props) => {
  const { errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <Container>
        <h1>Contact Me</h1>
        <p>
          Put your contact info here!
        </p>
      </Container>
    </Layout>
  )
}

export default ContactPage
