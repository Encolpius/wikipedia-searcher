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


function getquery () {
  $('#search-button').click(function() {

    var search = $('#input-box.value');

    $.ajax ( {
      url: "",
      dataType: 'jsonp',
      contentType: "application/json; charset=utf-8",
      type: 'GET',
      headers: { 'Api-User-Agent': 'http://localhost:8080'},
      success: function (result) {







      //  var pageid = Object.keys(result.query.pages).toString();
      //  var newPage = 'en.wikipedia.org?curid=' + pageid;
      //  window.location = 'https://' + newPage + '.com'
      }
    })
  })
}





getRandom();


})
