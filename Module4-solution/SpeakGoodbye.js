( function (window){

  var byespeaker = {};	
  var speakWord = "Good Bye";

  byespeaker.speak = function (name){
    console.log(speakWord + " " + name);
  }
  window.byeSpeaker = byespeaker;


})(window);
