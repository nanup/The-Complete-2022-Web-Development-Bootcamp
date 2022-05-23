for (var i = 0; i < document.querySelectorAll(".drum").length ; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        this.style.color = "white";
        var jump = new Audio("sounds/jump.mp3")
        jump.play();
    })
}

document.addEventListener("keypress", function(event) {
    animateButton(event.key);
})

function animateButton(key) {
    document.querySelector("." + key).classList.add("active");
}