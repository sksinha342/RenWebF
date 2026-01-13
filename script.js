const API = "https://sksinha342.onrender.com";

document.getElementById("loginForm")?.addEventListener("submit", async e => {
  e.preventDefault();

  const msg = document.getElementById("msg");
  msg.innerText = "Server waking up...";

  const form = new FormData(e.target);
  const res = await fetch(API + "/api/login", {
    method: "POST",
    body: form
  });

  const data = await res.json();
  localStorage.setItem("user", JSON.stringify(data));
  location.href = "dash.html";
});
