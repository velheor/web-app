var clicks = 0;

function onClickMinusButton() {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
};

function onClickPlusButton() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};