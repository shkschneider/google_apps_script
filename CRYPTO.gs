/**
 * @customfunction
 */
function CRYPTO(id, fiat="usd") {
  var res = UrlFetchApp.fetch("https://coingecko.com/en/coins/"+id+"/"+fiat);
  var html = res.getContentText()
  var s = 'data-target="price.price"';
  var index = html.search(s);
  if (index >= 0) {
    var pos = index + s.length
    return Number(html.substring(pos, pos + s.length).replace(/[^0-9\.]+/g,""));
  }
}
