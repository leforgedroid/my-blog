import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(0.75),
              // boxShadow: `3px 3px 5px #888888`,
              borderRadius: 10,
              border: `1px solid #888888`,
              padding: `5px 5px 5px 5px`,
              height: `62px` }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 3),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p style={{fontSize: `small`, width: `75%`}}>
              Written by <strong>{author}</strong> who lives and works near Grand Rapids Michigan and loves trying out new technologies and teaching others whatever he can teach.
              {` `}<br/>
              Please &nbsp; 
              <a href={`https://twitter.com/${social.twitter}`}>
                follow
              </a>
              &nbsp; him! Thank you!
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
