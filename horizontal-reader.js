/*!
 * horizontal reader 1.0
 * by Matthew Offenbacher
 * License: MIT
 */

const buttonLeft = document.getElementById("slideLeft"),
    buttonRight = document.getElementById("slideRight");
var totalWidth, magicNum, columnGap = 48,
    c = document.getElementById("horizontal-text").clientWidth + columnGap;
setTimeout(() => {
    getVariables()
}, 1200);
var page = 0;


function getVariables() {
    totalWidth = document.getElementById("horizontal-text").scrollWidth
}

function resetPage() {
    page = Math.round(document.getElementById("horizontal-text").scrollLeft / c), magicNum = totalWidth - page * c + columnGap, bumpers()
}

function nextPage() {
    page++, slide(), bumpers(), arrows()
}

function previousPage() {
    page--, slide(), bumpers(), arrows()
}

function slide() {
    document.getElementById("horizontal-text").scrollLeft = page * c;
}

function bumpers() {
    magicNum = (totalWidth - (page * c) + columnGap),   
document.getElementById("slideLeft").disabled = 0 == page,
 document.getElementById("slideRight").disabled = magicNum == c || magicNum >= c - 10 && magicNum <= c + 10 || magicNum >= (c / 2) - 10 && magicNum <= (c / 2) + 10 || magicNum >= c / 3 - 7 && magicNum <= c / 3 + 7 || magicNum >= c / 4 - 5 && magicNum <= c / 4 + 5

}

function arrows() {

if (document.getElementById("slideLeft").disabled) {
  document.getElementById("left").style.display = "none";} else {document.getElementById("left").style.display = "block";}  
if (document.getElementById("slideRight").disabled) {
  document.getElementById("right").style.display = "none";} else {document.getElementById("right").style.display = "block";}
}

function adapt() {
    c = document.getElementById("horizontal-text").clientWidth + columnGap, setTimeout(() => {
        getVariables()
    }, 1e3), setTimeout(() => {
        resetPage()
    }, 1100), slide()
}

function hint() {
    0 == document.getElementById("slideRight").disabled && (document.getElementById("slideRight").style.backgroundColor = "#fffa75", setTimeout(() => {
        document.getElementById("slideRight").style.backgroundColor = ""
    }, 1100)), 0 == document.getElementById("slideLeft").disabled && (document.getElementById("slideLeft").style.backgroundColor = "#fffa75", setTimeout(() => {
        document.getElementById("slideLeft").style.backgroundColor = ""
    }, 1100))
}
bumpers(), arrows(), buttonRight.onclick = nextPage, buttonLeft.onclick = previousPage, window.addEventListener("resize", adapt), document.onkeydown = function(e) {
    39 == e.keyCode ? document.getElementById("slideRight").click() : 37 == e.keyCode && document.getElementById("slideLeft").click()
}, window.addEventListener("wheel", e => hint());
