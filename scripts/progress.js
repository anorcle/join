let statusSVG = ["./icons/progress/status/current.svg", "./icons/progress/status/incomplete.svg", "./icons/progress/status/complete.svg"];

const setStatus = (cardIndex, status) => {
    let statusLogo = document.getElementsByClassName("status");

    statusLogo[cardIndex].children[0].src = statusSVG[status];
    statusLogo[cardIndex].style.display = "flex";

}