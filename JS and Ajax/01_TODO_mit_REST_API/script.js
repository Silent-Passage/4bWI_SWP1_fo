document.getElementById("btnload").addEventListener("click", function () {
  LoadDataFromAPI();
});

function LoadDataFromAPI() {
  fetch("https://67b890de699a8a7baef48779.mockapi.io/todos")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let html = [];

      json.forEach((todo) => {
        html.push(
          "<div><div>" +
            todo.title +
            "</div><img width=250px src=" +
            todo.image +
            "?id=" +
            Math.random() +
            "/><div>-----</div></div>"
        );
      });
      document.getElementById("content").innerHTML = html.join("");
      console.log(html);
    });
}
