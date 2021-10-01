const visit = require('unist-util-visit')

const REGEX = /-(prev|next|both)-/g;
const SNIPPETS = {
  prev: '<link rel="stylesheet" href="/styles/disablePrev.css" />',
  next: '<link rel="stylesheet" href="/styles/disableNext.css" />',
  both: '<link rel="stylesheet" href="/styles/disableNavigation.css" />'
}

module.exports = function plugin() {
  function getReplacer(match) {
    const html = SNIPPETS[match.replace(/-/gi, '')];
    return html;
  }

  function transformer(tree) {
    visit(tree, 'text', function (node) {
      if (!REGEX.test(node.value)) return node;

      node.type = 'jsx';
      node.value = node.value.replace(REGEX, getReplacer);
      return node;
    });
  }

  return transformer;
}
