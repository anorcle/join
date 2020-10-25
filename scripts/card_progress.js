let currentCardIndex = 0;
let cards = document.getElementsByClassName("card");

const addClickToProgressElement = () => {
    let progressUnit = document.getElementsByClassName("progress-element");
    for (let i = 0; i < progressUnit.length; i++) {
        progressUnit[i].addEventListener("click", () => {
            showCard(i);
        });
    }
}

const showCard = (i) => {
    changeCards(currentCardIndex);
    goAwayJoin();

    let tab = cards[currentCardIndex];
    tab.classList.add("upAnimation");
    tab.onanimationend = () => {
        tab.classList.remove("upAnimation");
        changeCards(i, "click");
    }

    if (i == cards.length - 1) {
        takeForSubmit();
    } else {
        document.getElementById("next").innerText = "Next";
        addClickToNextButton();
    }

    currentCardIndex = i;

}

const addClickToJoinButton = () => {
    document.getElementById("join").onclick = () => {
        changeCards(currentCardIndex);
        goAwayJoin();
    }
}

const addClickToNextButton = () => {
    let nextBtn = document.getElementById("next");

    nextBtn.onclick = () => {
        let newIndex = currentCardIndex + 1;
        if (newIndex < cards.length) {
            let tab = cards[currentCardIndex];
            tab.classList.add("upAnimation");
            tab.onanimationend = () => {
                currentCardIndex = newIndex;
                tab.classList.remove("upAnimation");
                nextBtn.innerText = "Next";
                changeCards(newIndex);
                if (newIndex == cards.length - 1) {
                    takeForSubmit();

                }
            }
        }


    }
}

const takeForSubmit = () => {
    let nextBtn = document.getElementById("next");
    currentCardIndex = cards.length - 1;
    nextBtn.innerText = "submit";
    nextBtn.onclick = () => {
        if (allCardsAreValid()) {
            // submit();
        }
        console.log(allCardsAreValid());
        console.log("solo");
    }
}

// make join go away and bring cards
const goAwayJoin = () => {
    document.getElementsByClassName("join-btn-folder")[0].style.display = "none";
    document.getElementsByClassName("main_right-side_button-holder")[0].style.display = "flex";
}

const changeCards = (index, method = "button") => {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    cards[index].style.display = "flex";
    if (method == "button") {
        checkValidation(index);
    } else {
        checkValidation();
    }

}


// for social
const addClickToAddMoreSocial = () => {

    document.getElementById("addMoreSocial").onclick = () => {
        let row = document.createElement("div");

        row.classList = "card_row card_row-r_20_80";
        let platform = document.createElement("Anorcle-Float-Input");
        platform.setAttribute("label", "Platform Name");
        platform.setAttribute("type", "text");

        let profile = document.createElement("Anorcle-Float-Input");
        profile.setAttribute("label", "Link to Profile");
        profile.setAttribute("type", "text");

        row.appendChild(platform);
        row.appendChild(profile);

        document.getElementById("socialList").appendChild(row);
    }


}
