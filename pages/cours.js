'use strict'

// State page, ouput the whole app state

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'

const Cours = (props) => <Fragment>
  <Header title='Cours' />
  <section className='section'>
    <div className='container'>
      <pre>{JSON.stringify(props.courses, null, '  ')}</pre>
    </div>
  </section>
</Fragment>

const mapState = (state) => ({ courses: state.courses })

export default withRematch(initStore, mapState)(Cours)
