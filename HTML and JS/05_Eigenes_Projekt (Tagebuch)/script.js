document.getElementById("save").addEventListener("click", function () {
  let input = document.getElementById("input");
  let text = input.value;
  if (text !== "") {
    document.getElementById("entries").innerHTML =
      "<div class='entry'>" +
      text +
      "</div>" +
      document.getElementById("entries").innerHTML;
    input.value = "";
  }
});
