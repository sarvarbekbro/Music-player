const progress = document.getElementById('progress'),
song = document.getElementById('song'),
ctrlIcon = document.getElementById('ctrlIcon'),
playBtn = document.querySelector('.play-btn')


song.onloadeddata = function(){
  progress.max = song.duration
  progress.value = song.currentTime

}

function playPause(){

  if(song.paused){
    song.play()
    ctrlIcon.classList.remove('fa-play')
    ctrlIcon.classList.add('fa-pause')

  } else{
    song.pause()
    ctrlIcon.classList.remove('fa-pause')
    ctrlIcon.classList.add('fa-play')
  }

}
playBtn.addEventListener('click', playPause)


song.addEventListener('timeupdate', () => {
  progress.value = song.currentTime
})

progress.onchange = function(){
  song.play()
  song.currentTime = progress.value
  ctrlIcon.classList.remove('fa-pause')
    ctrlIcon.classList.add('fa-play')
}