import React from 'react'

export const Header = () => (
  <header className="c-site-header">
    <h2 className="c-site-header__intro-title">your <strong>Spotify</strong></h2>
    <h1 className="c-site-header__main-title">Top Tunes</h1>
    <div className="c-site-header__prompt-wrapper">
      <button className="c-site-header__prompt">Get Started</button>
    </div>
  </header>
)

export default Header
