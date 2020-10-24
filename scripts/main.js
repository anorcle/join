let currentCardIndex = -1;
let cards = document.getElementsByClassName("card");

// join button
document.getElementById("join").onclick = () => {
    currentCardIndex++;
    currentCardIndex = currentCardIndex % (cards.length - 1);
    changeCards();
    document.getElementById("join").style.display = "none";
    document.getElementsByClassName("main_right-side_button-holder")[0].style.display = "flex";
}

// back button
document.getElementById("back").onclick = () => {
    currentCardIndex--;
    if (currentCardIndex < 0) {
        currentCardIndex = cards.length - 1;
    }
    currentCardIndex = currentCardIndex % cards.length;
    changeCards();
}

// next button
document.getElementById("next").onclick = () => {

    currentCardIndex++;
    currentCardIndex = currentCardIndex % cards.length;
    changeCards();

}

const changeCards = () => {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    cards[currentCardIndex].style.display = "flex";
}