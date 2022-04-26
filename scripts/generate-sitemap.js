const sitemap = require('nextjs-sitemap-generator')
const fs = require('fs')
const path = require('path')

sitemap({
  baseUrl: 'https://www.the-ship-of-theseus.com',
  pagesDirectory: path.resolve(__dirname, '../public/'),
  targetDirectory: path.resolve(__dirname, '../public/'),
  ignoredExtensions: ['js', 'map', 'json', 'xml', 'png', 'jpg', 'jpeg', 'svg'],
  ignoredPaths: ['[fallback]'],
  allowFileExtensions: true,
  ignoredPaths: ["404", "favicon", "boat", "scene", "sub"],
  extraPaths: ["/"]
})
