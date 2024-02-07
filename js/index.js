window.addEventListener('onload', () => {
  window.player = new APlayer({
    container: document.getElementById('aplayer'),
    // fixed: true,
    mini: true,
    loop: 'none',
    audio: [
      {
        name: 'Voice',
        artist: '綾地寧々',
        url: 'assets/see-mine-0721.ogg',
      },
      {
        name: '恋せよ乙女！',
        artist: '米倉千尋',
        url: 'http://music.163.com/song/media/outer/url?id=34324540.mp3',
      },
    ],
  });

  /** @type {HTMLAnchorElement} */
  const tip = document.getElementById('tip');
  /** @type {HTMLImageElement} */
  const bg = document.getElementById('bg');

  tip.addEventListener('click', () => {
    tip.style.display = 'none';
    bg.style.opacity = 1;
    bg.addEventListener('click', () => {
      window.location.href = 'https://www.bilibili.com/video/BV1Lz4y1v7xa';
    });

    setTimeout(() => {
      window.player.play();
      document.title = '私のオナニーを見てください！';
    }, 1000);
  });
});
