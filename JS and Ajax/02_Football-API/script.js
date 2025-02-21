loadBundesliga2024();

function loadBundesliga2024() {
  fetch("https://api.openligadb.de/getbltable/bl1/2024")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let html = [];
    });
}
