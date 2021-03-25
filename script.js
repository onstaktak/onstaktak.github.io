
// ============= Slideshow for website ==============
// (from w3 schools)
var slideIndex = 1;
showSlides(slideIndex);

//for the prev and next arrows
function plusSlides(n) {
  showSlides(slideIndex += n);
  stopSounds(); //stop all sound elemets from scene when moving between slides
  news.pause(); //stop the news report audio when moving between slides
  news.currentTime = 0; //reset time to 0 for news report
  //if statement to reset the 911 call audio once we're on slide #1
  if (slideIndex == 1){
  	sound.jump(0);
  }
  //play background music for scene 2
  if (slideIndex == 2){
    bgmusic.play();
    bgmusic.loop = true;

    bgmusic.volume = 0.5;
  }
  //stop it and reset it to 0 if we're not on second slide
  else{
    bgmusic.pause();
    bgmusic.currentTime = 0;
  }
}
//the same things happens for the dots
function currentSlide(n) {
  stopSounds();
  showSlides(slideIndex = n);
  news.pause();
  news.currentTime = 0;

  if (slideIndex == 1){
  	sound.jump(0);
  }

    if (slideIndex == 2){
    bgmusic.play();
    bgmusic.loop = true;

    bgmusic.volume = 0.5;
  }
  else{
    bgmusic.pause();
    bgmusic.currentTime = 0;
  }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// ================ Scene 2 ==============
var bgmusic = new Audio();
bgmusic.src = "scene2/suspenseMusic.mp3"; //background music

//array for all the clickable sound elements
var audio = new Audio();
var soundEffects = new Array('audio/journal.mp3','audio/piano.mp3','audio/rope.mp3','audio/run.mp3','audio/gun.mp3','audio/lightswitch.mp3','audio/lightbulb.mp3','audio/window.mp3','audio/door.mp3','audio/textmessages.mp3','audio/tissueBox.mp3','audio/boyfriend.mp3','audio/diploma.mp3');

//function to stop all sounds in the array and reset the current time to 0
function stopSounds(){
  for (i=0; i<soundEffects.length; i++){
    audio.src = soundEffects[i];
    audio.pause();
    audio.currentTime = 0;
  }
}
//all the functions to play the sounds upon mouse clicks
//all of these functions stop the sounds before playing a new one
function playnotebook(){
  stopSounds();
  audio.src = soundEffects[0];
  audio.play();
  audio.volume = 0.3;
}
function playpiano(){
  stopSounds();
  audio.src = soundEffects[1];
  audio.play();
  audio.volume = 0.3;
}
function playrope(){
  stopSounds();
  audio.src = soundEffects[2];
  audio.play();
  audio.volume = 0.3;
}
function playrun(){
  stopSounds();
  audio.src = soundEffects[3];
  audio.play();
  audio.volume = 0.3;
}
function playbullet(){
  stopSounds();
  audio.src = soundEffects[4];
  audio.play();
  audio.volume = 0.3;
}
function playswitch(){
  stopSounds();
  audio.src = soundEffects[5];
  audio.play();
  audio.volume = 0.3;
}
function playbulb(){
  stopSounds();
  audio.src = soundEffects[6];
  audio.play();
  audio.volume = 0.3;
}
function playWindow(){
  stopSounds();
  audio.src = soundEffects[7];
  audio.play();
  audio.volume = 0.3;
}
function playdoor(){
  stopSounds();
  audio.src = soundEffects[8];
  audio.play();
  audio.volume = 0.3;
}
function playtexts(){
  stopSounds();
  audio.src = soundEffects[9];
  audio.play();
  audio.volume = 0.3;
}
function playtissue(){
  stopSounds();
  audio.src = soundEffects[10];
  audio.play();
  audio.volume = 0.3;
}
function playboyfriend(){
  stopSounds();
  audio.src = soundEffects[11];
  audio.play();
  audio.volume = 0.5;
}
function playdiploma(){
  stopSounds();
  audio.src = soundEffects[12];
  audio.play();
  audio.volume = 0.5;
}



//================= Scene 3 ===================
let button = document.getElementById('nextbutton');
var news = new Audio();
news.src = "media/Final.mp3";
news.addEventListener('timeupdate', nextPic);

let image = document.getElementById('image');
let images = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpeg','image7.png','image8.jpeg','image9.jpeg','image10.jpg']

// button.addEventListener('click', nextPic);

function nextPic() {

// image.src = 'slideshow/'+images[i];
// console.log(news.currentTime);

if (news.currentTime > 0) {
  image.src = "slideshow/image1.jpg";
}

if (news.currentTime > 6) {
  image.src = "slideshow/image2.jpg";
}

if (news.currentTime > 11) {
  image.src = "slideshow/image4.jpg";
}


if (news.currentTime > 17) {
  image.src = "slideshow/image6.jpeg";
}

if (news.currentTime > 23) {
  image.src = "slideshow/image7.png";
}

if (news.currentTime > 32) {
  image.src = "slideshow/image3.jpg";
}

if (news.currentTime > 39) {
  image.src = "slideshow/image10.jpg";
}

if (news.currentTime > 50) {
  image.src = "slideshow/image9.jpeg";
}

if (news.currentTime > 57) {
  image.src = "slideshow/image8.jpeg";
}

if (news.currentTime > 62) {
  image.src = "slideshow/image5.jpg";
}

}


// ============== The p5.js sound wave ===================
let sound;
let amp;
let fft;

function preload(){
	sound = loadSound("media/scene1call.mp3");
}

function setup(){
	let canvas = createCanvas(1000,640);
	canvas.parent("container");
	background(0,0,0);
	
	amp = new p5.Amplitude();
	fft = new p5.FFT();
	sound.loop();
	sound.setVolume(0);
}

function draw(){
	background(0);
	let waveform = fft.waveform();
	if (slideIndex == 1)
	{
		sound.setVolume(1);
	}
	else{
		sound.setVolume(0);
	}
	for(let i=0; i<waveform.length;i++){
		let loudness = waveform[i] * 1.5;
		let ypos = map(loudness,-1,1,height,0);
		circle(i,ypos,4);
	}
}






