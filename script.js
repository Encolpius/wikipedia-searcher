$(document).ready( function () {

  let randomButton = document.getElementById('random-button');


 function getRandom() {
   $(randomButton).click(function() {
     $.ajax( {
       url:"https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&format=json&prop=info&inprop=url",
       dataType: 'jsonp',
       contentType: "application/json; charset=utf-8",
       type: 'GET',
       headers: { 'Api-User-Agent': 'http://localhost:8080'},
       success: function(result) {
         var rawJson = JSON.stringify(result);
         var Json = JSON.parse(rawJson);

         // Finding The URL
         for (var pageId in result.query.pages) {
           if (result.query.pages.hasOwnProperty(pageId)) {
             window.location = result.query.pages[pageId].fullurl;
           }
         }
       }
     })
   })
 }


function getQuery () {
 $('#input-box').keypress(function(e) {
   if (e.which == 13 ) {
     let searchTerms = $('#input-box').val();

     $.ajax({
        url: "https://en.wikipedia.org/w/api.php?",
        type: 'GET',
        dataType: 'jsonp',
        contentType: "application/json; charset=utf-8",
        headers: { 'Api-User-Agent': 'http://localhost:8080'},
        data: {
          action: 'query',
          format: 'json',
          list: 'search',
          srsearch: searchTerms,
          srlimit: '8',
          prop: 'extracts',
          inprop: 'url',
        },

        success: function (data) {
          console.log(data)
          $('#article-area').empty();
          var results = data.query.search;
          console.log(results);

          for (var i = 0; i < 8; i++) {
            let title = data.query.search[i].title;
            let snippet = data.query.search[i].snippet;
            let pageid = data.query.search[i].pageid;
            let url = 'https://en.wikipedia.org/wiki?curid=' + pageid;
            $('#article-area').append('<a href=' + url + '><div class="articleBox">' + title + '<br><br><br>' + snippet + '...</div></a>');
          }
        }
      });
    }
  });
}


getRandom();
getQuery();

})
