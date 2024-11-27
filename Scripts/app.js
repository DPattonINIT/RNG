let nameBtn = document.getElementById("nameBtn");
let showFirst = document.getElementById("showFirst");
let showLast = document.getElementById("showLast");
let showEmail = document.getElementById("showEmail");
let lastFive = document.getElementById("lastFive");
let five =[];
nameBtn.addEventListener("click", () => {
  GetJson();
});

function GetJson() {
  fetch("../Data/data.json")
    .then((response) => response.json())
    .then((data) => nextStudent(data.studentList));
    
}

function nextStudent(studentList) {
  let randomIndex = Math.floor(Math.random() * studentList.length);
  console.log(studentList[randomIndex]);
  showFirst.innerText = studentList[randomIndex].firstName;
  showLast.innerText = studentList[randomIndex].lastName;
  showEmail.innerText = studentList[randomIndex].email;
  five.push(showFirst.innerText);
  if(five.length == 6){
    five.shift();
  }
  lastFive.innerText = five
  console.log(lastFive);
}

