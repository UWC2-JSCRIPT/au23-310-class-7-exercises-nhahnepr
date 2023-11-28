// TODO
const nameForm = document.getElementById("fullname");
const email = document.getElementById("email");
const msg = document.getElementById("message");

const jobTitle = document.getElementById("jobtitle");
const url = document.getElementById("url");
const codingLang = document.getElementById("codinglang");

const form = document.getElementById("form-contact");
const select = document.getElementById("contact-reason");

let valid = false;

// check to see if the inputted name is 3 or more characters
const validLength = (input, min) => {
    if (input.value.trim().length > min) {
        input.parentElement.classList.remove("invalid");
        return true;
    } else {
        input.parentElement.classList.add("invalid");
        alert("Name must be 3 characters or more");
        return false;
    }
};

// check to see if email matches regex
const validateEmail = (email) => {
    const re = /\w+@\w+\.\w+/;
    if (re.test(email.value.trim())) {
        email.parentElement.classList.remove("invalid");
        return true;
    } else {
        email.parentElement.classList.add("invalid");
        alert("Email is incorrect");
        return false;
    }
}

// check to see if message length is long enough
const validMsg = (input, min) => {
    if (input.value.trim().length > min) {
        input.parentElement.classList.remove("invalid");
        return true;
    } else {
        input.parentElement.classList.add("invalid");
        alert("Message must be 10 characters or more");
        return false;
    }
};

const handleSelect = (selectElement) => {
    const selectedValue = selectElement.value;
    if (selectedValue == 'JobOpp') {
        jobTitle.parentElement.classList.remove("hidden");
        url.parentElement.classList.remove("hidden");
        codingLang.parentElement.classList.add("hidden");
    } else if (selectedValue == 'Talkop') {
        codingLang.parentElement.classList.remove("hidden");
        jobTitle.parentElement.classList.add("hidden");
        url.parentElement.classList.add("hidden");
    }
};

select.addEventListener("change", () => handleSelect(select));

form.addEventListener("submit", (e) => {
    handleSelect(select);
    e.preventDefault();
    validLength(nameForm, 2);
    validateEmail(email);
    validMsg(msg, 9);
    /*    if (
        validLength(nameForm, 3)
    ) {
        valid = true;
    } else {
        valid = false;
        e.preventDefault();
    };*/
});