import React, { Component, Fragment } from 'react'
import { HeaderBar, LastestPost } from '../../components'

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <HeaderBar />
        <br />
        <section className="latest-posts">
          <LastestPost />
        </section>
      </Fragment>
    )
  }
}
