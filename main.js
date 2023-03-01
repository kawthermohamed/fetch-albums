let albumcontainer = document.querySelector(".albucont");
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((result) => {
    return result.json();
  })
  .then((albums) => {
    console.log(albums);
    //return album Id
    let IDS = [];
    albums.forEach((albu) => {
      IDS.push(albu.userId);
    });
    console.log(IDS);
    //filter Ids with no repeat
    let uniqueIds = [];
    for (i = 0; i < IDS.length; i++) {
      if (IDS[i] !== IDS[i + 1]) {
        uniqueIds.push(IDS[i]);
      } else {
      }
    }
    //create div for each un repeated id
    //then clssify according the main user id
    uniqueIds.forEach((uId) => {
      let albumBox = document.createElement("div");
      albumBox.className = "album-box";
      let albumId = document.createElement("div");
      albumId.className = "album-id";
      albumId.innerHTML = `User ID: ${uId}`;
      albumId.setAttribute("data-index", uId);
      let albumCont = document.createElement("div");
      albumCont.className = "album-cont";
      albumBox.appendChild(albumId);
      albumBox.appendChild(albumCont);
      albumcontainer.appendChild(albumBox);
      albums.forEach((albun) => {
        if (albun.userId == uId) {
          let albumtitle = document.createElement("div");
          albumtitle.className = "album-title";
          albumtitle.innerHTML = `album ${albun.id}: ${albun.title}`;
          albumCont.appendChild(albumtitle);
          //fetchphotos then loop if albun.id=photo.albumid
        }
      });
    });
  });
