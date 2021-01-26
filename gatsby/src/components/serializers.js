import React from 'react'
import Figure from './Figure/Figure'

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
  },
}

export default serializers
