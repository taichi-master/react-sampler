import { validateComments } from './validateComments'

describe( 'validateComments', function () {

  it( 'is a function.', function () {
    expect( validateComments ).toBeInstanceOf( Function )  
  } )

  it( 'should work with empty comment.', function () {
    const actual = validateComments( [] ),
          expected = true

    expect( actual ).toBe( expected )
  } )

  it( 'should return false.', function () {
    const actual = validateComments( [ { email: 'Lew@abc.com' } ] ),
          expected = false

    expect( actual ).toBe( expected )
  } )

  it( 'should return true.', function () {
    const actual = validateComments( [ { email: 'lew@abc.com' } ] ),
          expected = true

    expect( actual ).toBe( expected )
  } )

} )