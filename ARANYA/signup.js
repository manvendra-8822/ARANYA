const signUp = document.querySelector(".sign-up");
console.log("hello");
signUp.addEventListener("submit", async (e) => {
  e.preventDefault();
  // console.log(e.target);
  const body = {
    username: e.target[1].value,
    email: e.target[0].value,
    aadhar: e.target[2].value,
    number: e.target[3].value,
    password: e.target[4].value,
  };
  const signup = await fetch("http://localhost:3005/createUser", {
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
    alert("Sign up successful");
    window.location.href = "registered.html";
  } else {
    alert("try again !!");
  }
});
