import React from 'react'
import '../scss/styles.scss'
import Header from './header'
import Sidebar from './sidebar'

class Layout extends React.Component {
  render () {
    const { children } = this.props
    return (
      <div>
        <Header />
        <div className='content'>
          <div className='container'>
            <div className='row'>
              <div className='nine columns'>
                {children}
              </div>
              <div className='three columns'>
                <Sidebar />
              </div>
            </div>
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
