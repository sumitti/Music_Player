document.addEventListener("DOMContentLoaded", function() {
  const audioPlayer = document.getElementById('audioPlayer');
  const playPauseButton = document.getElementById('playPause');
  const nextButton = document.getElementById('next');
  const volumeSlider = document.getElementById('volumeSlider');
  const songImage = document.querySelector('.imgBx img');

  // List of audio sources and corresponding images
  const playlist = [
    { src: 'song1.mp3', name: 'Song 1', image: 'cd.jpg' },
    { src: 'song2.mp3', name: 'Song 2', image: 'img4.jpg' },
    { src: 'song3.mp3', name: 'Song 3', image: 'img3.jpg' }
  ];

  let currentSongIndex = 0;

  // Load the first song
  audioPlayer.src = playlist[currentSongIndex].src;
  songImage.src = playlist[currentSongIndex].image;

  playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseButton.classList.remove('fa-play');
      playPauseButton.classList.add('fa-pause');
    } else {
      audioPlayer.pause();
      playPauseButton.classList.remove('fa-pause');
      playPauseButton.classList.add('fa-play');
    }
  });

  nextButton.addEventListener('click', () => {
    playNextSong();
  });

  volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value;
  });

  // Function to play the next song
  function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    audioPlayer.src = playlist[currentSongIndex].src;
    songImage.src = playlist[currentSongIndex].image;
    audioPlayer.play();
    playPauseButton.classList.remove('fa-play');
    playPauseButton.classList.add('fa-pause');
  }

  // Event listener to automatically play the next song when the current song ends
  audioPlayer.addEventListener('ended', playNextSong);
});
