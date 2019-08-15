import React from 'react'
import { Link } from 'gatsby'
class Header extends React.Component {
  render () {
    return (
      <header className='page'>
        <div className='container top'>
          <div className='logo u-pull-left'>
            <Link to='/'>HOLMOK</Link>
          </div>
          <div className='menu u-pull-right'>
            <Link to='/'>HOME</Link>
            {` `}/{` `}
            <Link to='/about'>ABOUT</Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
