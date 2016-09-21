import React from 'react'

class TopSection extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className='c-top-section o-main-section'>
        <h2 className="c-top-section__title">your <strong>Top Artists</strong></h2>
        <div className="c-top-section__content">
          <div className="c-top-section__content__item">
            <div className="c-top-section__filters">
              <div>
                <button className="c-top-section__filters__option">All Time</button>
              </div>
              <div>
                <button className="c-top-section__filters__option">Past 6 Months</button>
              </div>
              <div>
                <button className="c-top-section__filters__option">Recently</button>
              </div>
            </div>
          </div>
          <div className="c-top-section__content__item">
            <div className="c-top-section__block">
              The Jezabels
            </div>
          </div>
          <div className="c-top-section__content__item">
            <div className="c-top-section__block">
              The Jezabels
            </div>
          </div>
          <div className="c-top-section__content__item">
            <div className="c-top-section__block">
              The Jezabels
            </div>
          </div>
          <div className="c-top-section__content__item">
            <div className="c-top-section__block">
              The Jezabels
            </div>
          </div>
          <div className="c-top-section__content__item">
            <div className="c-top-section__block">
              The Jezabels
            </div>
          </div>
        </div>
      </section>
    );
  }

}

TopSection.propTypes = {
}

export default TopSection
