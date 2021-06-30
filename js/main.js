const form = document.getElementById("form");

const email = document.getElementById("mail");

const errorMessage = document.getElementById("error");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let errors = [];

    if(email.value === ''){
        errors.push("Please provide a valid email address");
        errorMessage.innerText = errors.join(", ")
        email.style.border = "1px solid red";
    }
    else{
        error = []
        errorMessage.innerText = errors.join("");
        email.style.border = "";
        console.log("cleaned");
    }
})