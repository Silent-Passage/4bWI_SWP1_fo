let data = [
  { firstName: "David", lastName: "Bischof", points: 1 },
  { firstName: "Peter", lastName: "Gstreu", points: 30 },
  { firstName: "Raphael", lastName: "Heim", points: 100 },
];

// for (let i = 0; i < data.length; i++) {
//   const element = data[i];
//   console.log(element.firstName);
// }

function loadpeople() {
  let html = "";
  data.forEach((element) => {
    html += "<div>" + element.firstName + " " + element.lastName + "</div>";
  });
  document.getElementById("content").innerHTML = html;
}
loadpeople();
