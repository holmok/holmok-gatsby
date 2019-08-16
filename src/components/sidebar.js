import React from 'react'
import Image from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const Sidebar = () => {
  const data = useStaticQuery(graphql`
query BioQuery {
  avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
    childImageSharp {
      fixed(width: 120, height: 120) {
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
`)
  const { author } = data.site.siteMetadata
  return (

    <div className='sidebar'>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        imgStyle={{

        }}
        style={{ 'text-align': 'center' }}
      />
      <h1>External Stuff</h1>

      <p>
        <a href='http://www.twiter.com'>Twitter</a>&nbsp;&middot;{` `}
        <a href='http://www.twiter.com'>500px</a>&nbsp;&middot;{` `}
        <a href='http://www.twiter.com'>LinkedIn</a>&nbsp;&middot;{` `}
        <a href='http://www.twiter.com'>Github</a>
      </p>
    </div>
  )
}

export default Sidebar
