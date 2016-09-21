import React from 'react'
import Intro from '../../../components/Intro'
import TopSection from '../../../components/TopSection'

export const HomeView = () => (
  <div className="c-main-page">
    <div className="c-main-page__bg-shade"></div>
    <div className="c-main-page__content">
      <div className="o-centered-wrapper">
        <Intro />
        <TopSection />
        <TopSection />
      </div>
    </div>
  </div>
)

export default HomeView
