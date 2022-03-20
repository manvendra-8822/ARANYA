const login = document.querySelector(".login");

login.addEventListener("submit", async (e) => {
  e.preventDefault();

  const body = {
    username: e.target[0].value,
    password: e.target[1].value,
  };

  const signup = await fetch("http://localhost:3005/validateUser", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await signup.json();
  // console.log(data);
  if (data.status === "OK") {
    alert("Login successful");
    window.location.href = "thank.html";
  } else {
    alert("try again !!");
  }
});
