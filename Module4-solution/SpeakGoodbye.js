( function (window){

  var byeSpeaker = {};	
  var speakWord = "Good Bye";

  byespeaker.speak = function (name){
    console.log(speakWord + " " + name);
  }
  window.byeSpeaker = byeSpeaker;


})(window);
