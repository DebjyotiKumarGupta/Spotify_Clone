console.log("Welcome to spotify");

let songIndex=0;
let audioElement = new Audio("/songs/1.mp3");
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs= [
    {songName: "Salam-e-Ishq" , fileName:"/songs/1.mp3", coverPath:"/covers/1.jpg"},
    {songName: "Salam-e-Ishq" , fileName:"/songs/1.mp3", coverPath:"/covers/1.jpg"},
    {songName: "Salam-e-Ishq" , fileName:"/songs/1.mp3", coverPath:"/covers/1.jpg"},
    {songName: "Salam-e-Ishq" , fileName:"/songs/1.mp3", coverPath:"/covers/1.jpg"},
    {songName: "Salam-e-Ishq" , fileName:"/songs/1.mp3", coverPath:"/covers/1.jpg"},
    {songName: "Salam-e-Ishq" , fileName:"/songs/1.mp3", coverPath:"/covers/1.jpg"},
    {songName: "Salam-e-Ishq" , fileName:"/songs/1.mp3", coverPath:"/covers/1.jpg"},
]


masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})
// audioElement.play();

audioElement.addEventListener('timeudpdate', ()=>{
    console.log('timeupdate');
});