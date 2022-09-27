//song list
let All_song = [
   {
     name: "暁光 - Half time Old",
     path: "https://raw.githubusercontent.com/agrihajrian/hs/master/01.%E6%9A%81%E5%85%89.mp3",
     img: "https://hikarinoakari.com/wp-content/uploads/nuevo/2022/07/600x600bb-34.jpg",
     singer: "Opening Theme Hosi no Samidare"
   },
   {
     name: "Natsuyume Noisy - Asaka",
     path: "https://raw.githubusercontent.com/agrihajrian/hs/master/01.%E5%A4%8F%E5%A4%A2%E3%83%8E%E3%82%A4%E3%82%B8%E3%83%BC.mp3",
     img: "https://hikarinoakari.com/wp-content/uploads/nuevo/2022/08/CV239.jpg",
     singer: "Opening Theme Summertime Render"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = '<div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>';

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/
