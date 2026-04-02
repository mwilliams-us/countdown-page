// spawn flowers continuously

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


// countdown clock pulse
setInterval(createFlower, 800);


        const targetDate = new Date("2026-06-05T13:00:00Z");

        function updateCountdown() {
            const now = new Date();
            const diff = targetDate - now;

            if (diff <= 0) {
                document.getElementById("timer").innerText = "Time reached.";
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            document.getElementById("timer").innerText =
                `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();