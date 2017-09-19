console.log("JavaScript ready!");

window.addEventListener("load", function() {
  console.log("Page Loaded");

  //DOM

  document.getElementById('smallBlock').style.backgroundColor = 'red';
  document.getElementById('text').innerHTML = "Hello, I'm a cube!";

  var title = document.createElement('title').value = "hallo";

  document.title = title;

  //video playback time
  var video = document.getElementById("video");
  video.playbackRate = 0.1;
});
