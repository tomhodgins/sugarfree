const sass = require('sass')
const parseCSS = require('./lib/parse-css/index.cjs.js')
const stringify = (list = [], joiner = '') =>  list.map(token =>token.toSource()).join(joiner)

module.exports = function sugarFree(string = '@--sass-lang {}') {
  return parseCSS.parseAStylesheet(string).value.reduce(
    (output, rule) => {
      output.push(
        rule.type === 'AT-RULE' && rule.name === '--sass-lang'
          ? sass.renderSync({data: stringify(rule.value.value)}).css.toString()
          : rule.toSource()
      )

      return output
    },
    []
  ).join('\n')
}
