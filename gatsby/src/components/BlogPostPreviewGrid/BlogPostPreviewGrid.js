import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import BlogPostPreview from "../BlogPostPreview/BlogPostPreview"


const BlogPostPreviewGridStyles = styled.div`
  margin: 2em 0 4em;

  .headline {
    font-size: var(--font-micro-size);
    line-height: var(--font-micro-line-height);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 2rem 0;
  }

  .grid {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2em;

    @media (min-width: 450px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 675px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .browseMoreNav {
    margin-top: 1rem;
    text-align: right;

    a {
      display: inline-block;
      padding: 0.5rem 0;
      color: inherit;
      text-decoration: none;

      @media (hover: hover) {
        :hover {
          color: var(--color-accent);
        }
      }
    }
  }
`

function BlogPostPreviewGrid(props) {
  return (
    <BlogPostPreviewGridStyles>
      {props.title && <h2 className='headline'>{props.title}</h2>}
      <ul className='grid'>
        {props.nodes &&
          props.nodes.map((node) => (
            <li key={node.id}>
              <BlogPostPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className='browseMoreNav'>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </BlogPostPreviewGridStyles>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
}

export default BlogPostPreviewGrid
