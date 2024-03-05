const Url = `https://emoji-api.com/emojis?access_key=4e1774d191b487990ca6e78692478dc7e6b7ecd8`;
let Emojis = [];
let allEmojiContainer = document.querySelector(".allEmoji");

async function allEmoji() {
    let response = await fetch(Url);
    let data = await response.json();
    for (let i = 0; i < data.length; i++) {
        Emojis.push(data[i].character);
    }
}

allEmoji();

let btn = document.getElementById("btn");

btn.addEventListener("mouseover", () => {
    if (Emojis.length > 0) {
        btn.innerText = Emojis[Math.floor(Math.random() * Emojis.length)];
    } else {
        btn.innerText = "😊";

    }
});

btn.addEventListener("click", () => {
    if (Emojis.length > 0) {
        btn.innerText = Emojis[Math.floor(Math.random() * Emojis.length)];
    } else {
        btn.innerText = "😊";

    }
});

