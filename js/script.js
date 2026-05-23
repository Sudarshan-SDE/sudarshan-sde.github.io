const titles = [
    "Full Stack .NET Developer",
    "Front End Developer",
    "Back End Developer"
];

const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetween = 1500;

let i = 0;
let j = 0;

const element = document.querySelector(".typing-text-designation");

function typeTitle() {
    if (!element) return; // ✅ prevent crash

    if (j < titles[i].length) {
        element.textContent += titles[i][j];
        j++;
        setTimeout(typeTitle, typingSpeed);
    } else {
        setTimeout(eraseTitle, delayBetween);
    }
}

function eraseTitle() {
    if (!element) return; // ✅ prevent crash

    if (j > 0) {
        element.textContent = titles[i].substring(0, j - 1);
        j--;
        setTimeout(eraseTitle, erasingSpeed);
    } else {
        i = (i + 1) % titles.length;
        setTimeout(typeTitle, typingSpeed);
    }
}

// Start ONLY if element exists
if (element) {
    typeTitle();
}



window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    if (!preloader) return;

    setTimeout(() => {
        preloader.classList.add("hide");
    }, 1500);
});



document.addEventListener("DOMContentLoaded", () => {

    console.log("DOM loaded");

    fetch("./header.html")
        .then(res => {
            if (!res.ok) throw new Error("Header not found");
            return res.text();
        })
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(err => console.log("Header error:", err));

    fetch("./footer.html")
        .then(res => {
            if (!res.ok) throw new Error("Footer not found");
            return res.text();
        })
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(err => console.log("Footer error:", err));

});
