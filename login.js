const auth = firebase.auth();

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("rememberMe").checked;
  const errorMsg = document.getElementById("loginError");

  errorMsg.textContent = ""; // Clear previous errors

  // ✅ Basic Validation
  if (!email || !password) {
    errorMsg.textContent = "Please enter both email and password.";
    return;
  }

  const persistence = rememberMe
    ? firebase.auth.Auth.Persistence.LOCAL
    : firebase.auth.Auth.Persistence.SESSION;

  // ✅ Set persistence and login
  firebase.auth().setPersistence(persistence)
    .then(() => {
      return auth.signInWithEmailAndPassword(email, password);
    })
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Login successful for:", user.email);

      // ✅ Show alert or success message
      alert("Login successful!");
      // Or redirect
      // window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error("Login Error:", error.code, error.message);
      errorMsg.textContent = error.message;
    });
});

// ✅ Forgot Password Function
function forgotPassword() {
  const email = document.getElementById("email").value.trim();
  if (!email) {
    alert("Please enter your email first.");
    return;
  }

  auth.sendPasswordResetEmail(email)
    .then(() => {
      alert("Password reset email sent!");
    })
    .catch((error) => {
      console.error("Password Reset Error:", error.message);
      alert("Error: " + error.message);
    });
}
