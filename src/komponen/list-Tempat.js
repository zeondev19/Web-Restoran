import("../public/data/DATA.json").then(({ default: datajson}) =>{
    console.log(datajson);
    let resto = datajson["restaurants"];
    let listTempat= "";
    resto.forEach(function(tempat){
        listTempat+=`
        <div class="judulResto" tabindex="0">
        <div class="gambarResto">
            <p><i>${tempat["city"]}</i></p>
            <img src="${tempat["pictureId"]}" alt="${tempat["name"]}">
        </div>
        <div class="deskripsiResto">
          <p class="juduldesc">${tempat["name"]}</p>
          <p class="ratedesc">Rating ${tempat["rating"]}</p>
          <p class="deskripsi">${tempat["description"].slice(0, 200)}...</p>
        </div>
      </div>
        `
    });
    document.querySelector('#list-tempat').innerHTML = listTempat;
});