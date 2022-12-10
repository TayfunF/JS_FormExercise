let userFormDOM = document.querySelector("#userForm");
userFormDOM.addEventListener("submit", formHeandler);

function formHeandler(event) {
  event.preventDefault();
  let USERNAME = document.querySelector("#username");
  let SCORE = document.querySelector("#score");
  addItem(USERNAME.value, SCORE.value);
}

let userListDOM = document.querySelector("#userList");
const addItem = (username, score) => {
  let liDOM = document.createElement("li");
  liDOM.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  liDOM.innerHTML = `${username} 
  <span class="badge bg-primary rounded-pill">${score}</span>
  `;
  userListDOM.append(liDOM);
};
