export function validateComments ( comments ) {
  var isValid = true

  for ( var comment of comments ) {
    const { email } = comment

    if ( ~email.indexOf( 'Lew' ) ){
      isValid = false
      break
    }
  }

  return isValid
}