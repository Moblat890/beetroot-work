
//Створити сторінку, що показує нумерований список пісень:

let playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
  },

  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
  },

  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
  },

  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
  },

  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
  },

  {
    author: "AC/DC",
    song: "BACK IN BLACK"
  },

  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
  },

  {
    author: "METALLICA",
    song: "ENTER SANDMAN"
  }

];

let listForHtml = '';
for (i = 0; i < playList.length; i++) {
  listForHtml = listForHtml + `<br> ${i + 1}${'.'} ${playList[i].author} ${'-'} ${playList[i].song} <br>`;
}
document.write(listForHtml);