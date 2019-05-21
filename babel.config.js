// babel.config.js
module.exports = ( api ) => {
  const isTest = api.env( 'test' ),
        cfg = {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ],
          plugins: [
            [ "@babel/plugin-proposal-decorators", { "legacy": true } ],
            [ "@babel/plugin-proposal-class-properties", { "loose": true } ],
            [ "@babel/plugin-transform-runtime", {
              corejs: isTest ? 2 : false
              // regenerator: true
            } ]
          ]
        }

  switch ( api.env() ) {
  case 'development':
    cfg.plugins.push( "react-hot-loader/babel" )
    break
  case 'production':
    cfg.plugins.push( "@babel/plugin-syntax-dynamic-import" )
    break
  }

  return cfg
}