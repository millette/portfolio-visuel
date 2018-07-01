'use strict'

/*
About page, description and repository come from package.json

repository must be a github repository, in the form USERNAME/REPONAME
*/

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'

const State = (props) => <Fragment>
  <Header title='State' />
  <section className='section'>
    <div className='container'>
      <pre>{JSON.stringify(props.fullState, null, '  ')}</pre>
    </div>
  </section>
</Fragment>

const mapState = (state) => ({ fullState: { ...state } })

export default withRematch(initStore, mapState)(State)
