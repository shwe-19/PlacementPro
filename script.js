// script.js

function getUserId() {
  return localStorage.getItem("userId");
}

function getRole() {
  return localStorage.getItem("role");
}

function logout() {
  localStorage.clear();
  window.location.href = "../index.html";
}
