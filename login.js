function logout() {
  window.localStorage.clear();
  location.reload();
}
  
function saveLoginInfo() {
// Gets input value
let name = document.getElementById("username").value;
let pass = document.getElementById("password").value;

// Saves data to retrieve later
localStorage.setItem("username", name);
localStorage.setItem("password", pass);
}