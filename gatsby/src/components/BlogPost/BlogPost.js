import React from "react"
import styled from 'styled-components'
import { format, distanceInWords, differenceInDays } from "date-fns"
import { buildImageObj } from "../../lib/helpers"
import { imageUrlFor } from "../../lib/image-url"
import PortableText from "../portableText"
import Container from "../Container/Container"

const BlogPostStyles = styled.article`
  .mainImage {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
    }
    @media (min-width: 900px) {
      img {
        width: 50%;
      }
    }
  }

  .mainContent {
    a {
      color: var(--color-accent);

      @media (hover: hover) {
        :hover {
          color: inherit;
        }
      }
    }

    h2,
    & h3,
    & h4,
    & h5,
    & h6 {
      font-weight: 600;
    }

    figure {
      margin: 0;
      padding: 0;

      img {
        max-width: 100%;
      }
    }
  }

  .metaContent {
  }

  .publishedAt {
    margin: 2rem 0 3rem;
    opacity: 0.8;
  }
`

function BlogPost(props) {
  const { _rawBody, title, mainImage, publishedAt } = props
  return (
    <BlogPostStyles>
      {mainImage && mainImage.asset && (
        <div className="mainImage">
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .auto("format")
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div>
          <div className="mainContent">
            <h1 className="title">{title}</h1>
            {publishedAt && (
              <div className="publishedAt">
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM Do, YYYY")}
              </div>
            )}
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
        </div>
      </Container>
    </BlogPostStyles>
  )
}

export default BlogPost
