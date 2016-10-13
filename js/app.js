console.log('wired up!')

// console.log($)



// var putDataOnPage = function(serverResponse) {
//   // console.log(serverResponse)
// }


var forEach = function(arr, cb){
   for(var i = 0 ; i < 9; i+=1){
      cb(arr[i], i, arr)
      // console.log(arr.length)
   }
}

var legislatorContainer = document.querySelector('.profiles-container1')
// console.log(legislatorContainer)
var putDataOnPage = function(returnedData) {
      //  console.log(returnedData.results)
   forEach( returnedData.results , function(obj){
      // console.log(obj.title, obj.gender, obj.party)
      var bigStr =     '<div class="col-sm-4 col-md-4 elementHolder1">'
        bigStr +=       '<div class="thumbnail1">'
        bigStr +=         '<h1>' + obj.first_name + ' ' + obj.last_name + '</h1>'
        bigStr +=         '<h3>' + obj.title + ' -- ' + obj.party + '-' + obj.state_name + '</h3>'
        bigStr +=         '<ul>'
        bigStr +=           '<li>' + 'email: ' + obj.oc_email + '</li>'
        bigStr +=           '<li>' + 'website: ' + obj.website + '</li>'
        bigStr +=           '<li>' + 'facebook: ' + obj.facebook_id + '</li>'
        bigStr +=           '<li>' + 'twitter: ' + obj.twitter_id + '</li>'
        bigStr +=         '</ul>'
        bigStr +=         '<p class="theP1">' + 'Term End ' + obj.term_end + '</p>'
        bigStr +=       '</div>'
        bigStr +=     '</div>'

      legislatorContainer.innerHTML += bigStr
   })
}
$.getJSON('https://congress.api.sunlightfoundation.com/legislators?apikey=d1b6cb41350045d4a5a25dcc0e0c728f').then(putDataOnPage)


var legislatorContainer2 = document.querySelector('.profiles-container2')
// console.log(legislatorContainer)
var putDataOnPage2 = function(returnedData2) {
      //  console.log(returnedData.results)
   forEach( returnedData2.results , function(obj2){
      // console.log(obj.title, obj.gender, obj.party)
      var bigStr2 =     '<div class="col-sm-4 col-md-4 elementHolder2">'
        bigStr2 +=       '<div class="thumbnail2">'
        bigStr2 +=         '<h1>' + obj2.first_name + ' ' + obj2.last_name + '</h1>'
        bigStr2 +=         '<h3>' + obj2.title + ' -- ' + obj2.party + '-' + obj2.state_name + '</h3>'
        bigStr2 +=         '<ul>'
        bigStr2 +=           '<li>' + 'email: ' + obj2.oc_email + '</li>'
        bigStr2 +=           '<li>' + 'website: ' + obj2.website + '</li>'
        bigStr2 +=           '<li>' + 'facebook: ' + obj2.facebook_id + '</li>'
        bigStr2 +=           '<li>' + 'twitter: ' + obj2.twitter_id + '</li>'
        bigStr2 +=         '</ul>'
        bigStr2 +=         '<p class="theP2">' + 'Term End ' + obj2.term_end + '</p>'
        bigStr2 +=       '</div>'
        bigStr2 +=     '</div>'

      legislatorContainer2.innerHTML += bigStr2
   })
}
$.getJSON('https://congress.api.sunlightfoundation.com/legislators?apikey=d1b6cb41350045d4a5a25dcc0e0c728f').then(putDataOnPage2)
