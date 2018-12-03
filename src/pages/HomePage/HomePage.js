import React, { Component, Fragment } from 'react'
import { HeaderBar, LastestPost, Landing } from '../../components'

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <HeaderBar />
        {/* <section>
          <Landing />
        </section> */}
        <br />
        <br />
        <section className="latest-posts">
          <LastestPost header="Recent Article" />
        </section>
      </Fragment>
    )
  }
}
