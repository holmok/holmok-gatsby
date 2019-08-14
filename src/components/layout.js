import React from 'react'
import '../scss/styles.scss'
import Header from './header'

class Layout extends React.Component {
  render () {
    const { children } = this.props
    return (
      <div>
        <Header />
        <div class='content'>
          <div class='container'>
            {children}
          </div>
        </div>
        <footer className='page'>
          ©{new Date().getFullYear()} Christopher Holmok
        </footer>
      </div>
    )
  }
}

export default Layout
