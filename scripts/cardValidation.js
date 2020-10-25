// for card 1
const isCardValid1 = () => {
    let firstName = document.getElementById("firstName").value;
    let email = document.getElementById("email").value;

    if (firstName != undefined && isEmailValid(email) && dob != undefined) {
        return true;
    } else {
        return false;
    }
}

const isEmailValid = (email) => {
    var re = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return re.test(String(email).toLowerCase());
}

// for card 2
const isCardValid2 = () => {
    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;
    let city = document.getElementById("city").value;

    if (country != undefined && state != undefined && city != undefined) {
        return true;
    } else {
        return false;
    }
}

// for card three
