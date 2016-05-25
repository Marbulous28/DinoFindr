exports.dinoFetch = function(output){
  var dinoFetcher = "http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1";
  var dinoName;
  $.get(dinoFetcher, function(response) {
     dinoName = response[0][0];
     $(output).text(dinoName);

     var wikiFetcher = "https://en.wikipedia.org/w/api.php?action=query&titles=" + dinoName + "&indexpageids=1&prop=extracts&rvprop=content&format=json";
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
        var pageId = parseInt(response.query.pageids[0]);
        console.log(response.query.pages.pageId);
        debugger;
      }
    });
  });
};
