function createFlower() {
    const flower = document.createElement("img");
    flower.src = "images/dahlia.png";
    flower.classList.add("flower");

    // random position
    flower.style.top = Math.random() * 100 + "%";
    flower.style.left = Math.random() * 100 + "%";

    // random size
    const size = 40 + Math.random() * 80;
    flower.style.width = size + "px";

    // random animation delay
    flower.style.animationDelay = Math.random() * 5 + "s";

    document.querySelector(".background").appendChild(flower);

    // remove after animation to prevent buildup
    setTimeout(() => {
        flower.remove();
    }, 6000);
}

// spawn flowers continuously
setInterval(createFlower, 800);