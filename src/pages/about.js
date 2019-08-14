import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

class About extends React.Component {
  render () {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='ABOUT' />
        <h1>About Page</h1>

        <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non odio neque. Fusce tempor viverra pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam ut elit nunc. Aliquam sed efficitur dui. Maecenas rhoncus, erat vitae ornare lacinia, massa sem mattis mauris, ac lobortis tellus massa a ante. Quisque et convallis dui. Donec dictum aliquet urna quis scelerisque. Mauris malesuada aliquam quam, vitae iaculis metus. Suspendisse fringilla dui vel dapibus consectetur. Maecenas mattis tellus ut lectus euismod, vel congue mi condimentum.
        </p>
        <p>
Nunc convallis dui sit amet velit dapibus, sed malesuada ex faucibus. Maecenas scelerisque, erat vel ultrices porta, eros tellus iaculis arcu, eu sollicitudin ligula justo vitae risus. Etiam in orci nec ipsum maximus ultricies non quis tortor. Suspendisse vel varius risus, quis ultrices mi. Maecenas mattis vehicula enim et condimentum. Nam sed risus non lacus vulputate elementum. Vivamus dolor urna, viverra nec imperdiet non, pharetra eget leo. Nullam ante urna, luctus mollis iaculis et, maximus vel ex. Pellentesque pellentesque diam vitae justo volutpat rutrum. Suspendisse sollicitudin semper eros sed faucibus. Praesent ac nibh eu nunc consequat condimentum eu sit amet turpis. Proin elit risus, feugiat ac scelerisque ut, posuere vel orci. Cras eget elit nibh. Pellentesque eu augue orci.
        </p>
        <p>
Ut magna odio, dictum in tellus ac, porta scelerisque metus. In ultrices ornare eros lacinia sodales. Vivamus nibh ipsum, placerat eget augue eget, imperdiet faucibus sem. Donec mattis quam sapien, quis blandit erat vulputate gravida. Maecenas velit lectus, finibus quis orci at, gravida gravida augue. Donec in odio felis. Etiam at neque consequat, venenatis nulla ut, rhoncus urna. Nullam nec nibh sodales, vestibulum lacus vel, ultrices enim. Nulla elementum ac ipsum sit amet malesuada. Proin ac urna vitae dui consectetur pulvinar ut et odio. Nunc feugiat sed lectus quis sagittis. Proin at vestibulum lacus, vitae finibus tortor. Cras tincidunt vel nisi ac venenatis. Sed eu ante lacinia, convallis orci quis, iaculis erat. Maecenas sed neque elit. Nullam accumsan accumsan orci, vitae lobortis leo porta interdum.
        </p>
        <p>
Sed suscipit congue orci, in iaculis massa eleifend sit amet. Pellentesque ut venenatis nunc. Proin at lacinia purus. Nam et odio tempus, consectetur massa at, hendrerit sapien. Suspendisse potenti. Curabitur mattis libero eu rhoncus ultrices. Cras ligula augue, porttitor vel sapien pharetra, placerat sollicitudin ligula. Duis aliquet rutrum nibh et suscipit. Vestibulum tempor nulla vel felis viverra, eu eleifend nulla pellentesque. Vivamus non enim tristique quam dapibus ornare nec ac neque. Praesent faucibus vitae velit id vestibulum.
        </p>
        <p>
Fusce vel libero consequat, pellentesque nibh sit amet, ultrices diam. Proin egestas sagittis ultrices. Aenean vel nulla eget massa finibus tempus at id urna. Morbi semper a ante non finibus. Curabitur elementum eu metus ut tempor. Maecenas ut elit nec nibh suscipit efficitur. In hac habitasse platea dictumst. Nam sollicitudin, enim id eleifend bibendum, lacus massa dapibus dolor, at finibus turpis velit cursus nisl. Sed mauris risus, ornare ut risus sit amet, consequat tincidunt diam. Vivamus tristique id ante sed consectetur. Ut sit amet lorem vel quam placerat blandit ac non eros. Nulla id pretium est. Aenean mi mauris, iaculis id risus et, rutrum commodo diam. Aliquam sed hendrerit velit. Nulla facilisi.
        </p>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
