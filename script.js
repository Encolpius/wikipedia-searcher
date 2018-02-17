$(document).ready( function () {

  let randomButton = document.getElementById('random-button');


 function getRandom() {
   $(randomButton).click(function() {
     $.ajax( {
       url:"https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&format=json&prop=info&inprop=url",
       dataType: 'json',
       type: 'get',
       headers: { 'Api-User-Agent': 'andy.l.hunt85@gmail.com'},
       success: function(result) {
         var pageid = Object.keys(result.query.pages).toString();
         var newPage = 'en.wikipedia.org?curid=' + pageid
         window.location = 'http://' + newPage + '.com';
       }
     })
   })
 }






getRandom();


})
