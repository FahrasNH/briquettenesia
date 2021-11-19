const withPlugins = require('next-compose-plugins')
const withImage = require('next-images')
const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')

module.exports = withPlugins(
  [
    withSass,
    withImage,
    withCss,
  ],
)
