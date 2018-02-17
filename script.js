$(document).ready( function () {

  let randomButton = document.getElementById('random-button');


 function getRandom() {
   $(randomButton).click(function() {
     $.ajax( {
       url:"https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&formatversion=2",
       dataType: 'json',
       type: 'POST',
       headers: { 'Api-User-Agent': 'andy.l.hunt85@gmail.com'},
       success: function(result) {
         var rawJson = JSON.stringify(result);
         var json = JSON.parse(rawJson);
         console.log(json.query.pages[0].pageid);
         var pageid = json.query.pages[0].pageid;
         var newPage = 'en.wikipedia.org?curid=' + pageid
         window.location = 'http://' + newPage + '.com';
       }
     })
   })
 }






getRandom();


})
