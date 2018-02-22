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
        url: "http://en.wikipedia.org/w/api.php?",
        type: 'GET',
        dataType: 'jsonp',
        contentType: "application/json; charset=utf-8",
        headers: { 'Api-User-Agent': 'http://localhost:8080'},
        data: {
          action: 'opensearch',
          search: searchTerms,
          format: 'json',
          limit: '8',
        },

        success: function (data) {
          console.log(data)
          $('#article-area').empty();
          var title = data[1];
          var snippet = data[2]
          var url = data[3];

           for (var i = 0; i < title.length; i++) {
             for (var i = 0; i < snippet.length; i++) {
               for (var i = 0; i < url.length; i++) {
                $('#article-area').append('<a href=' + url[i] + '><div class="articleBox hover-border"><div class="title">' + title[i] + '</div><br><br>' + snippet[i] + '<div></a>')
               }
             }

          //  $('#article-area').append('<a href=' + url + '><div class="articleBox"><div class="title">' + title + '</div><br><br>' + snippet + '...</div></a>');
          }
        }
      });
    }
  });
}


getRandom();
getQuery();

})
