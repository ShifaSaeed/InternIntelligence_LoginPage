// signup.js

const auth = firebase.auth();

document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;
  const errorMsg = document.getElementById("signupError");

  console.log("Attempting signup with:", email);

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("User registered:", userCredential.user.email);
      alert("Account created!");
      errorMsg.textContent = "";

      // Optional: Redirect after signup
      // window.location.href = "index.html";
    })
    .catch((error) => {
      errorMsg.textContent = error.message;
      console.error("Signup Error:", error.message);
    });
});
