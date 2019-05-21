import getObjectValues from './getObjectValues'

it( 'is a function', function () {
  expect( getObjectValues ).toBeInstanceOf( Function )
} )

it( 'should return the value option of an object', function (){
  const obj = { abc:123, def:'xyz' }

  expect( getObjectValues( obj ) ).toEqual( [ 123, 'xyz' ] )
  expect( getObjectValues( obj ) ).toEqual( Object.values( obj ) )
} )