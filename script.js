console.log("Welcome to Spotify");

// Iniatialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let gif = document.getElementById("gif");
let songItem =Array.from(document.getElementsByClassName('songItem'));

let songs = [
  {songName:"warriyo -Mortals", filePath:"songs/1.mp3", coverPath: "cover/1.jpg"},
  {songName:"Cielo -Huma-huma", filePath:"songs/2.mp3", coverPath: "cover/2.jpg"},
  {songName:"DEAF KEV", filePath:"songs/3.mp3", coverPath: "cover/3.jpg"},
  {songName:"Different Heaven & EHIDE", filePath:"songs/4.mp3", coverPath: "cover/4.jpg"},
  {songName:"Janji Heroes-Tonight", filePath:"songs/5.mp3", coverPath: "cover/5.jpg"},
  {songName:"Rabba", filePath:"songs/6.mp3", coverPath: "cover/6.jpg"},
  {songName:"Salam-e-Ishq", filePath:"songs/7.mp3", coverPath: "cover/7.jpg"},
  {songName:"Let me love", filePath:"songs/8.mp3", coverPath: "cover/8.jpg"},
  {songName:"Breakup", filePath:"songs/9.mp3", coverPath: "cover/9.jpg"},
]

songItem.forEach((element, i)=> {
  console.log(element,i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
  
// audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click', function(){
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play"); 
    masterPlay.classList.add("fa-circle-pause"); 
    gif.style.opacity = 1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0; 
  }
});

// listen to events
audioElement.addEventListener("timeupdate", ()=> {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  progressBar.value = progress;
});

progressBar.addEventListener('change',function(){
  audioElement.currentTime = progressBar.value* audioElement.duration/100 ;
});