let statusSVG = ["./icons/progress/status/current.svg", "./icons/progress/status/incomplete.svg", "./icons/progress/status/completed.svg"];

const setStatus = (cardIndex, status) => {
    let statusLogo = document.getElementsByClassName("status");

    statusLogo[cardIndex].children[0].src = statusSVG[status];
    statusLogo[cardIndex].style.display = "flex";
    setIllustration(cardIndex);
}

let illustrationSVG = ["ill-imp", "ill-address", "ill-social", "ill-department", "ill-general", "ill-focus"];

const setIllustration = (index) => {
    document.getElementById("right-illustration").src = `./icons/illustration/${illustrationSVG[index]}.svg`;
}