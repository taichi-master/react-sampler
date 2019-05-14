const app = require( './app' )

describe( 'app', function () {

  beforeEach( function () {
  } )

  afterEach( function () {
  } )

  it( 'should work', function () {
    const actual = app(),
          expected = true

    expect( actual ).toBe( expected )
  } )

} )