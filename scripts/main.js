let currentCardIndex = -1;
let cards = document.getElementsByClassName("card");

// join button
document.getElementById("join").onclick = () => {
    currentCardIndex++;
    currentCardIndex = currentCardIndex % (cards.length - 1);
    changeCards();
    document.getElementsByClassName("join-btn-folder")[0].style.display = "none";
    document.getElementsByClassName("main_right-side_button-holder")[0].style.display = "flex";
}

// next button
document.getElementById("next").onclick = () => {

    let tab = cards[currentCardIndex];
    tab.classList.add("upAnimation");
    tab.onanimationend = () => {
        tab.classList.remove("upAnimation");

        currentCardIndex++;
        currentCardIndex = currentCardIndex % cards.length;
        changeCards();
    }
}

const changeCards = () => {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    cards[currentCardIndex].style.display = "flex";
}
