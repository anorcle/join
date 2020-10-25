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
    setStatus(index, 0);
}


// for social
const addClickToAddMoreSocial = () => {



    let newSocial = `<div class="card_row card_row-r_20_80">
    <Anorcle-Float-Input label="Platform Name" type="text">
    </Anorcle-Float-Input>
    <Anorcle-Float-Input label="Link to Profile" type="text">
    </Anorcle-Float-Input>
</div>`;
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
