const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});


//contact
const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const phonenoEl = document.querySelector("#phone-number");
const messageEl = document.querySelector("#message");

const form = document.querySelector("#submit-form");

function checkValidations() {
    let letters = /^[a-zA-Z\s]*$/;
    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const phone = phonenoEl.value.trim();
    const message = messageEl.value.trim();
    if (name === "") {
        document.querySelector(".name-error").classList.add("error");
        document.querySelector(".name-error").innerText =
            "Please fill out this field!";
    } else {
        if (!letters.test(name)) {
            document.querySelector(".name-error").classList.add("error");
            document.querySelector(".name-error").innerText =
                "Please enter only characters!";
        } else {

        }
    }
    if (email === "") {
        document.querySelector(".name-error").classList.add("error");
        document.querySelector(".name-error").innerText =
            "Please fill out this field!";
    } else {
        if (!letters.test(name)) {
            document.querySelector(".name-error").classList.add("error");
            document.querySelector(".name-error").innerText =
                "Please enter only characters!";
        } else {

        }
    }
}

function reset() {
    nameEl = "";
    emailEl = "";
    phonenoEl = "";
    messageEl = "";
    document.querySelector(".name-error").innerText = "";
}