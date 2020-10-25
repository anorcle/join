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
        changeCards(i);
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

    document.getElementById("next").onclick = () => {
        let tab = cards[currentCardIndex];
        tab.classList.add("upAnimation");
        tab.onanimationend = () => {
            tab.classList.remove("upAnimation");
            currentCardIndex++;
            currentCardIndex = currentCardIndex % cards.length;
            changeCards(currentCardIndex);
        }
    }
}

// make join go away and bring cards
const goAwayJoin = () => {
    document.getElementsByClassName("join-btn-folder")[0].style.display = "none";
    document.getElementsByClassName("main_right-side_button-holder")[0].style.display = "flex";
}

const changeCards = (index) => {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    cards[index].style.display = "flex";
}
