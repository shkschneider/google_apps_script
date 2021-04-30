/**
 * https://blog.coingecko.com/import-coingecko-cryptocurrency-data-into-google-sheets/
 * @customfunction
 */
function IMPORTJSON(url, xpath) {
  var res = UrlFetchApp.fetch(url);
  var json = JSON.parse(res.getContentText());
  var patharray = xpath.split(".");
  for (var i = 0; i < patharray.length; i++) {
    json = json[patharray[i]];
  }
  if(typeof(json) === "undefined"){
    return "Node Not Available";
  } else if(typeof(json) === "object"){
    var tempArr = [];
    for(var obj in json){
      tempArr.push([obj,json[obj]]);
    }
    return tempArr;
  } else if(typeof(json) !== "object") {
    return json;
  }
}
