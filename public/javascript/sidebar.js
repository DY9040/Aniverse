const dashboardEl = document.getElementById("dashboard");
const sidebarBtnEl = document.getElementById("sidebar-btn");
const profileBtnEl = document.getElementById("profile-btn");
const newRantBtnEl = document.getElementById("new-rant-btn");
const profileEl = document.getElementById("profile");
const newPostFormEl = document.getElementById("new-post");
const postsHeaderEl = document.getElementById("posts-header");

dashboardEl.classList.add("dashboard-show");
profileEl.classList.add("profile-show");
sidebarBtnEl.classList.add("sidebar-btn-show");
profileBtnEl.classList.add("hide");
newRantBtnEl.classList.add("hide");

document.getElementById("sidebar-btn").addEventListener("click", (e) => {
  e.preventDefault();
  dashboardEl.classList.add("hide");
  dashboardEl.classList.remove("dashboard-show");
  sidebarBtnEl.classList.add("hide");
  sidebarBtnEl.classList.remove("sidebar-btn-show");
  profileBtnEl.classList.remove("hide");
  profileBtnEl.classList.add("sidebar-btn-show");
  newRantBtnEl.classList.remove("hide");
  newRantBtnEl.classList.add("new-rant-btn-show");
  postsHeaderEl.classList.add("hide");
});

document.getElementById("profile-btn").addEventListener("click", (e) => {
  e.preventDefault();
  dashboardEl.classList.remove("hide");
  dashboardEl.classList.add("dashboard-show");
  profileEl.classList.remove("hide");
  sidebarBtnEl.classList.remove("hide");
  sidebarBtnEl.classList.add("sidebar-btn-show");
  profileBtnEl.classList.add("hide");
  profileBtnEl.classList.remove("sidebar-btn-show");
  newRantBtnEl.classList.add("hide");
  newRantBtnEl.classList.remove("new-rant-btn-show");
  postsHeaderEl.classList.remove("hide");
});

document.getElementById("new-rant-btn").addEventListener("click", (e) => {
  e.preventDefault();
  dashboardEl.classList.remove("hide");
  dashboardEl.classList.add("dashboard-show");
  profileEl.classList.add("hide");
  newPostFormEl.classList.add("new-post-show");
  newRantBtnEl.classList.add("hide");
  newRantBtnEl.classList.remove("new-rant-btn-show");
});