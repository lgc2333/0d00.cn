(() => {
  const vIds = ['BV1Lz4y1v7xa', 'BV1Ke411e7xA', 'BV1iN4y1v7nB', 'BV1pC411r7mU', 'BV1Hg4y1r7LT', 'BV1rZ421B7mn', 'BV1eH4y1u7iN', 'BV1HM4m117fJ'];

  /**
   * @param {number} max
   * @returns {number}
   */
  function randMax(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  /**
   * @param {any[]} list
   * @returns {string}
   */
  function choose(list) {
    const index = randMax(list.length - 1);
    return list[index];
  }

  window.addEventListener('load', () => {
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

    tip.style.opacity = 1;
    tip.addEventListener('click', () => {
      tip.style.opacity = 0;
      bg.style.opacity = 1;
      bg.addEventListener('click', () => {
        window.location.href = `https://www.bilibili.com/video/${choose(vIds)}`;
      });

      setTimeout(() => {
        tip.style.display = 'none';
        window.player.play();
        document.title = '私のオナニーを見てください！';
      }, 1000);
    });
  });
})();
