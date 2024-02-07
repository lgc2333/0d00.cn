window.onload = () => {
  window.player = new APlayer({
    container: document.getElementById('aplayer'),
    // fixed: true,
    mini: true,
    // autoplay: true,
    loop: 'none',
    audio: [
      {
        name: 'Voice',
        artist: '綾地寧々',
        cover: 'assets/see-mine-0721.png',
        url: 'assets/see-mine-0721.ogg',
      },
      {
        name: '恋せよ乙女！',
        artist: '米倉千尋',
        cover: 'assets/see-mine-0721.png',
        url: 'http://music.163.com/song/media/outer/url?id=34324540.mp3',
      },
    ],
  });

  /** @type {HTMLImageElement} */
  const bg = document.getElementsByClassName('bg')[0];
  bg.style.opacity = 1;
  bg.addEventListener('click', () => {
    window.location.href = 'https://www.bilibili.com/video/BV1Lz4y1v7xa';
  });

  setTimeout(() => {
    // window.player.play();
    document.title = '私のオナニーを見てください！';
    window.player.notice('语音和BGM在这里~');
  }, 1000);
};
