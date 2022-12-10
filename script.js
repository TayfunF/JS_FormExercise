let userFormDOM = document.querySelector("#userForm");
userFormDOM.addEventListener("submit", formHeandler);

const showAlert = (message, classname = "warning") => `
<div class="alert alert-${classname} d-flex align-items-center" role="alert">
  <div>${message}</div>
</div>
`;
const myAlertDOM = document.querySelector("#myAlert");

function formHeandler(event) {
  event.preventDefault();
  let USERNAME = document.querySelector("#username");
  let SCORE = document.querySelector("#score");
  if (USERNAME.value && SCORE.value) {
    addItem(USERNAME.value, SCORE.value);
    USERNAME = "";
    SCORE = "";
  } else {
    myAlertDOM.innerHTML = showAlert(
      "Kullanıcı adı ya da şifre boş olamaz",
      "danger"
    );
  }
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
