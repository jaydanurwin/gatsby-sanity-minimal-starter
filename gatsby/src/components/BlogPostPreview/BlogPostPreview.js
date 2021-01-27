import { format } from "date-fns"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { buildImageObj, getBlogUrl } from "../../lib/helpers"
import { imageUrlFor } from "../../lib/image-url"
import PortableText from "../portableText"

const BlogPostPreviewStyles = styled.div`
  a {
    text-decoration: none;
    
    .leadMediaThumb {
      position: relative;
      padding-bottom: 66.666%;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .title {
      &:hover {
        text-decoration: underline;
      }
    }

    .excerpt {
      p {
        margin: 0.5em 0;
      }

      strong {
        font-weight: 600;
      }
    }

    .date {
      font-size: var(--font-small-size);
      line-height: var(--font-small-line-height);
      opacity: 0.8;
    }
  }
`

function BlogPostPreview(props) {
  return (
    <BlogPostPreviewStyles>
      <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
        <div className="leadMediaThumb">
          {props.mainImage && props.mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(props.mainImage))
                .width(600)
                .height(Math.floor((9 / 16) * 600))
                .auto("format")
                .url()}
              alt={props.mainImage.alt}
            />
          )}
        </div>
        <div className="text">
          <h3 className="title">{props.title}</h3>
          {props._rawExcerpt && (
            <div className="excerpt">
              <PortableText blocks={props._rawExcerpt} />
            </div>
          )}
          <div className="date">
            {format(props.publishedAt, "MMMM Do, YYYY")}
          </div>
        </div>
      </Link>
    </BlogPostPreviewStyles>
  )
}

export default BlogPostPreview
