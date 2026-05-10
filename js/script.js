// setTimeout(() => {
//     document.querySelector(".typing-text-designation").style.borderRight = "none";
// }, 4000);

const titles = [
    "Full Stack .NET Developer",
    "Front End Developer",
    "Back End Developer"
];

const typingSpeed = 100; // milliseconds per character
const erasingSpeed = 50; // milliseconds per character
const delayBetween = 1500; // delay before typing next title

let i = 0; // index of current title
let j = 0; // index of current character
const element = document.querySelector(".typing-text-designation");

function typeTitle() {
    if (j < titles[i].length) {
        element.textContent += titles[i][j];
        j++;
        setTimeout(typeTitle, typingSpeed);
    } else {
        setTimeout(eraseTitle, delayBetween);
    }
}

function eraseTitle() {
    if (j > 0) {
        element.textContent = titles[i].substring(0, j - 1);
        j--;
        setTimeout(eraseTitle, erasingSpeed);
    } else {
        i = (i + 1) % titles.length; // move to next title
        setTimeout(typeTitle, typingSpeed);
    }
}

// Start the animation
typeTitle();
