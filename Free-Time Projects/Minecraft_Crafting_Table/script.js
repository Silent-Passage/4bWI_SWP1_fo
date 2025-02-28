loadItems();

function loadItems() {
  fetch(
    "https://raw.githubusercontent.com/PrismarineJS/minecraft-data/master/data/pc/1.21.4/items.json"
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const html = [];

      json.forEach((i) => {
        html.push(i.name);
      });
      document.getElementById("table").innerHTML = html;
      console.log(html);
    });
}
