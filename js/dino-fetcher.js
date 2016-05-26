exports.dinoFetch = function(output){
  var dinoFetcher = "http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1";
  var dinoName;
  $.get(dinoFetcher, function(response) {
     dinoName = response[0][0];
     $('#dinoGen').html(dinoName);
     var wikiFetcher = "https://en.wikipedia.org/w/api.php?action=query&titles=" + dinoName + "&indexpageids=1&prop=extracts%7Cimageinfo&iiprop=url&rvprop=content&format=json";
     $.ajax( {
      url: wikiFetcher,
      jsonp: "callback",
      dataType: 'jsonp',
      data: {
          action: "query",
          list: "search",
          srsearch: "javascript",
          format: "json"
      },
      xhrFields: { withCredentials: true },
      success: function(response) {
        var pageId = response.query.pageids[0];
        var pages = response.query.pages;
        var extract = pages[pageId].extract;
        var position = extract.search("</p>");
        var newString;
        newString = extract.slice(0, position + 4);
        $(output).html(newString);
      }
    });
  });
};
