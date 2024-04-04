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


$(document).ready(function() {

    $("form").submit(function(event) {

        var firstName = $("input[name='First Name']").val();
        var lastName = $("input[name='Last Name']").val();
        var zipCode = $("input[name='Zip Code']").val();
        var teleNumber = $("input[name='Telephone Number']").val();
        var email = $("input[name='_replyto']").val();
        var radio = $("input[name='Contact Preference']:checked");


        if (radio.length == 0) {
            event.preventDefault();
            $(".hj-errors").html("<div class='hj-form-errors'>Please make sure you have clicked a 'Contact me' preference.</div>");
        };



        if (!isEmail(email)) {
            event.preventDefault();
            $(".hj-errors").html("<div class='hj-form-errors'>Please enter a valid email address.</div>");
            $("input[name='_replyto']").addClass("errorFocus");

        } else {
            $("input[name='_replyto']").removeClass("errorFocus");
        };



        if (teleNumber == "") {
            event.preventDefault();
            $(".hj-errors").html("<div class='hj-form-errors'>Please make sure you have filled in ALL required fields.</div>");
            $("input[name='Telephone Number']").addClass("errorFocus");

        } else {
            $("input[name='Telephone Number']").removeClass("errorFocus");
        };



        if (zipCode == "") {
            event.preventDefault();
            $(".hj-errors").html("<div class='hj-form-errors'>Please make sure you have filled in ALL required fields.</div>");
            $("input[name='Zip Code']").addClass("errorFocus");

        } else {
            $("input[name='Zip Code']").removeClass("errorFocus");
        };

        if (lastName == "") {
            event.preventDefault();
            $(".hj-errors").html("<div class='hj-form-errors'>Please make sure you have filled in ALL required fields.</div>");
            $("input[name='Last Name']").addClass("errorFocus");

        } else {
            $("input[name='Last Name']").removeClass("errorFocus");
        };



        if (firstName == "") {
            event.preventDefault();
            $(".hj-errors").html("<div class='hj-form-errors'>Please make sure you have filled in ALL required fields.</div>");
            $("input[name='First Name']").addClass("errorFocus");

        } else {
            $("input[name='First Name']").removeClass("errorFocus")
        };




        function isEmail(email) {
            var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(email);
        };


    });
});