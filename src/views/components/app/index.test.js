import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

import App from './index'
import NavBar from '@components/nav-bar'
import Home from '@views/Home'
import Posts from '@views/Posts'
import Comments from '@views/Comments'
import NoMatch from '@views/404'
import Root from '@src/Root'

let wrapped

describe( '<App />', function () {


  beforeEach( function () {
  } )

  afterEach( function () {
  } )

  it( 'should ', function () {
    // const wrapped = shallow( <App /> )
    wrapped = shallow(
      <Root>
        <App />
      </Root>
    )

    // console.log( wrapped.html() )
    expect( wrapped.find( NavBar ).length ).toBe( 0 )
  } )

} )