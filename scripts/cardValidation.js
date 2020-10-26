// for card 1
const isCardValid1 = () => {
    let firstName = document.getElementById("firstName").value.trim();
    let email = document.getElementById("email").value.trim();

    if ((firstName != undefined || firstName.length != 0) && isEmailValid(email) && (dob != undefined || dob.length != 0)) {
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
    let country = document.getElementById("country").value.trim();
    let state = document.getElementById("state").value.trim();
    let city = document.getElementById("city").value.trim();

    if ((country != undefined && country.length != 0) && (state != undefined && state.length != 0) && (city != undefined && city.length != 0)) {
        return true;
    } else {
        return false;
    }
}

// for card three
const isCardValid3 = () => {
    let socialPlatform = document.getElementsByClassName("social-platform");
    let profileLink = document.getElementsByClassName("profile-link");
    for (let i = 0; i < socialPlatform.length; i++) {
        if ((socialPlatform[i].value.trim() != undefined || socialPlatform[i].value.trim().length != 0) && validURL(profileLink[i].value)) {
            return true;
        }
    }
    return false;
}
// function to check url
const validURL = (str) => {
    var pattern = new RegExp('^(https:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

// for card four
const isCardValid4 = () => {
    let departments = document.getElementById("department").value.trim();
    let position = document.getElementById("position").value.trim();
    if ((departments != undefined && departments.length != 0) && (position != undefined && position.length != 0)) {
        return true;
    } else {
        return false;
    }
}

// for card five
const isCardValid5 = () => {
    let passionAndSkills = document.getElementById("passion-and-skills").value.trim();
    let whyAnorcle = document.getElementById("why-anorcle").value.trim();
    if ((passionAndSkills != undefined && passionAndSkills.length != 0) && (whyAnorcle != undefined && whyAnorcle.length != 0)) {
        return true;
    } else {
        return false;
    }
}

// for card six
const isCardValid6 = () => {
    let investmentTime = document.getElementById("investment-time").value.trim();
    let schedule = document.getElementById("schedule").value.trim();
    if ((investmentTime != undefined && investmentTime.length != 0) && (schedule != undefined && schedule.length != 0)) {
        return true;
    } else {
        return false;
    }
}

// their list

const allCardValid = [isCardValid1, isCardValid2, isCardValid3, isCardValid4, isCardValid5, isCardValid6];


// to check till click
const checkValidation = (index = -1) => {
    if (index < 0) {
        index = allCardValid.length - 1;
    }
    for (let i = 0; i <= index; i++) {
        if (allCardValid[i]()) {
            setStatus(i, 2);
        } else {
            setStatus(i, 1);
        }
    }
    // set current to current status
    setStatus(currentCardIndex, 0);
}

// to check if all are valid
const allCardsAreValid = () => {
    for (let i = 0; i < allCardValid.length; i++) {
        if (!allCardValid[i]()) {
            return false;
        }
    }
    return true
}