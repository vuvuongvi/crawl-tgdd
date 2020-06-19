const Nightmare = require('nightmare')
const nightmare = new Nightmare({ show: true, height: 1200, width: 1200 });

nightmare
  .goto('https://thegioididong.com')
  .type('#search-keyword', 'iphone')
  .click('.btntop')
  .wait('.cat42')
  .wait('#search-keyword')
  .evaluate(() => {
    let a = document.querySelectorAll('.cat42');
    let result = [];
    for (var i = 0; i < a.length; i++) {
        result.push(a[i].textContent);
    }
    console.log(result);
    return result;
  })
  .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })