import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import photos from './photos.json'
import Gallery from 'react-photo-gallery'
// import Carousel, { Modal, ModalGateway } from 'react-images'

class PhotoPageTemplate extends React.Component {
  render () {
    // const [currentImage, setCurrentImage] = useState(0)
    // const [viewerIsOpen, setViewerIsOpen] = useState(false)

    // const openLightbox = useCallback((event, { photo, index }) => {
    //   setCurrentImage(index)
    //   setViewerIsOpen(true)
    // }, [])

    // const closeLightbox = () => {
    //   setCurrentImage(0)
    //   setViewerIsOpen(false)
    // }

    const post = this.props.data.markdownRemark
    const data = this.props.data.images.edges.map(edge => (
      {
        src: edge.node.publicURL,
        title: edge.node.base,
        width: photos[`${edge.node.relativeDirectory}/${edge.node.base}`].width,
        height: photos[`${edge.node.relativeDirectory}/${edge.node.base}`].height
      }
    ))

    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1>
              {post.frontmatter.title}
            </h1>
            <p>
              {post.frontmatter.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <Gallery photos={data} />
          {/* <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={data.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway> */}
        </article>
        <nav>
          {previous && (
          <>&laquo; <Link to={previous.fields.slug} rel='prev'>
            {previous.frontmatter.title}
          </Link></>
          )}
          {next && previous && (<>{` `} / {` `}</>)}
          {next && (
          <><Link to={next.fields.slug} rel='next'>
            {next.frontmatter.title}
          </Link> &raquo;</>
          )}
        </nav>
      </Layout>
    )
  }
}

export default PhotoPageTemplate

export const pageQuery = graphql`
query PhotoPageBySlug($slug: String!) {
  site {
    siteMetadata {
      title
      author
    }
  }
  markdownRemark(fields: {slug: {eq: $slug}}) {
    id
    excerpt(pruneLength: 160)
    html
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      description
    }
  }
  images: allFile(filter: {sourceInstanceName: {eq: "photos"}, dir: {regex: $slug}, extension: {regex: "/jpg|png|gif/"}}) {
    edges {
      node {
        publicURL
        base
        relativeDirectory
      }
    }
  }
}
`
