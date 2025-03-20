function changeColor() {
  document.getElementById("greetings").style.color = "blue";
}

function hideElement(){
  document.querySelector("#titleText").classList.add("title");
}

fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        let results = document.querySelector("#results");
        console.log(json);
        console.log(json).length;
        for (let i = 0; i < json.length; i++) {
          let newElement = document.createElement("p");
          newElement.innerHTML = json[i].title;
          results.appendChild(newElement);
        }
        // json.forEach(element => {
        //   let newElement = document.createElement("p");
        //   newElement.innerHTML = element.title;
        //   results.appendChild(newElement);
        // });
      })

function addElement(){
let newElement = document.createElement("p");
let inp = document.getElementById('TODO').value;
newElement.innerHTML = inp
let results = document.querySelector("#results");
results.appendChild(newElement);
document.getElementById('TODO').value = "";
}

// document.getElementById('changeBtn').addEventListener("click", changeColor);

// document.getElementById('changeBtn').onclick = function() {
//     document.getElementById("greetings").style.color = "blue";
// }
