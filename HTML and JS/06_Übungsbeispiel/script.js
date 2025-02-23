document.getElementById("btn").addEventListener("click", function () {
  const h = document.getElementById("h").value;
  const kg = document.getElementById("kg").value;

  if (isNaN(h) || isNaN(kg)) {
    alert("Invalid value, please enter integers");
  } else {
    MagicFormel(h, kg);
  }
  //   alert("Test: " + h + kg);
});
let result;
let string = "";
let array = [];
let skibidi;
let reversed;
function MagicFormel(h, kg) {
  string = "";
  array = [];
  result = (h * 1.43) / kg - 3.4;
  console.log(result);
  if (result > 0) {
    skibidi = Math.round(result);
    for (let i = skibidi; i >= 0; i--) {
      array.push(i);
    }
    reversed = array.reverse();
    string += "Positiv: " + reversed;
  } else {
    skibidi = Math.round(result);
    for (let i = skibidi; i <= 0; i++) {
      array.push(i);
    }
    reversed = array.reverse();
    string += "Negativ: " + reversed;
  }
  document.getElementById("result").innerHTML = string;
  console.log("rounded: " + skibidi);
}
