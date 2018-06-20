const { environment } = require('@rails/webpacker')

// Bootstrap 3 (à vérifier avec 4.1.1) has a dependency over jQuery:
const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })
)

module.exports = environment
