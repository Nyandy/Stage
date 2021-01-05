let img = '';
const common = ["../assets/set1_card1.png", "../assets/set1_card2.png", "../assets/set1_card3.png", "../assets/set1_card4.png",
    "../assets/set1_card5.png", "../assets/set1_card6.png", "../assets/set1_card7.png", "../assets/set1_card8.png",
    "../assets/set1_card9.png", "../assets/set1_card10.png", "../assets/set1_card11.png", "../assets/set1_card12.png",
    "../assets/set1_card17.png", "../assets/set1_card18.png", "../assets/set1_card19.png", "../assets/set1_card20.png"];
const uncommon = ["../assets/set1_card13.png", "../assets/set1_card14.png", "../assets/set1_card15.png", "../assets/set1_card16.png"];
const rare =  ["../assets/set1_card21.png", "../assets/set1_card22.png"];

function Set1_Pull() {
    for (i = 1; i < 4; i++) {
        Roll();
        document.getElementById('img' + i).src = img;
    }
    document.getElementById('decks').style.display = 'none';
    document.getElementById('pulls').style.display = '';
}



function Roll() {
    let rng = Math.floor((Math.random() * 100) + 1);
    if (rng <= 75){
        img = common[Math.floor(Math.random() * common.length)];
    }
    else if (rng >= 75 && rng <= 95) {
        img = uncommon[Math.floor(Math.random() * uncommon.length)];
    }
    else if (rng >= 95 && rng <=100) {
        img = rare[Math.floor(Math.random() * rare.length)];
    }
}