//attempt to sign the user up
const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector(".username-input").value.trim();
    const email = document.querySelector(".email-input").value.trim();
    const password = document.querySelector(".password-input").value.trim();
    //inform user if password is to short
    if (password.length < 8) {
        alert("The minimum password length is 8 characters.");
    } else if (username && email && password) {
        const response = await fetch("/api/user", {
            method: "POST",
            body: JSON.stringify({ username, email, password}),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace("/");
    } else {
        alert("Please fill out all fields.");
    }
  }
};

//add event listeners
document
    .querySelector(".signup-button")
    .addEventListener("click", signupFormHandler);