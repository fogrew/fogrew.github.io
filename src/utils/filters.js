const path = require('path');
const fs = require("fs");

module.exports = {
  readableDate: (dateObj) => {
    return new Intl.DateTimeFormat('ru', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(new Date(dateObj))
  },

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  htmlDateString: (dateObj) => {
    const date = new Date(dateObj)
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  },

  // Get the first `n` elements of a collection.
  head: (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  },

  // Get extension of URL
  extname: (stringUrl) => {
    return path.extname(stringUrl)
  },

  // Get SVG content to inline
  inline: (stringPath) => {
    const newPath = path.join(__dirname, '../assets/', stringPath)
    const content = fs.readFileSync(newPath, 'utf8')

    return content
  },
}
