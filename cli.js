#!/usr/bin/env node
const fs = require('fs')
const sugarFree = require('./index.js')

const file = process.argv.slice(2)[0]
let css

try {
  css = fs.readFileSync(file).toString()
} catch (error) {
  css = file
}

console.log(
  sugarFree(css)
)