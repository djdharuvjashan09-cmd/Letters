const letters = {
    "miss-you": {
        title: "Open When <br> You Miss Me",
        message:
            "I have always hated the idea of missing each other, because it means that we aren’t together, I wish we could just become one. I love you Gargi, I miss you a lot more.I wish I could be there with you right now. Until then, just remember that I'm always thinking of you. I love you."
    },

    "bad-day": {
        title: "Open When<br> You're Having A Bad Day",
        message:
            "It's okay to have bad days. Crest is always followed by a trough. Take a breath, take a break, and remember that tomorrow is another day, and you will make the most out of it. You've got this. MWAHHHHHHH"
    },

    "need-a-hug": {
        title: "Open When <br> You Need A Hug",
        message:
            "Consider this your virtual hug. I’ll give you the tightest and most mass clenching ones, but for now squeeze your pillow really tight and pretend it's me. I can't wait to hug you for real."
    },

    "cant-sleep": {
        title: "Open When <br> You Can't Sleep",
        message:
            "Still awake? Close your eyes, get comfy, and imagine we're lying next to each other. I wanna lay under the sky, like on a terrace or the best would be a mountain top, and look towards the sky (actually looking at you without letting you notice it)  )Hopefully I'll see you in your dreams and we could cuddle and sleep ^^ ."
    },

    "love-you": {
        title: "Open When <br> You Need To Know I Love You",
        message:
            "I love you the most, but my love still isn’t capable of the deity you have in yourself, I wish wish wishhhh I could fly pink planes which would give love earthquakes in your heart of 10.0 scale  .I love you more than I could ever fit into a little letter, but I hope this reminds you just how much you mean to me."
    },

    "thinking-of-you": {
        title: "Open When <br> You're Thinking Of Me",
        message:
            "AWWWW It means we aren’t able to talk rn, sowrrryyy . I love you a lot gole. Sorry im not talking to you right now, but im sure ill cove up for it, mwahhhh. If you're thinking about me right now, just know that there's a very good chance I'm thinking about you too. , yours only and lovingly super dashing cute smart blazing rock jannu DHARUV:))))"
    }
};

// fetching the letter name
const params = new URLSearchParams(window.location.search);
const letterId = params.get("letter");

const letter = letters[letterId];

if (letter) {
    document.getElementById("letter-title").innerHTML = letter.title;
    document.getElementById("letter-message").textContent = letter.message;
} else {
     document.getElementById("letter-title").textContent = "Letter not found.";
    document.getElementById("letter-message").textContent = "Hmm this letter doesn't seem to exist.";
}

const letterText = document.querySelector(".letter-text");
const gif = document.querySelector(".opening-gif");

setTimeout(() => {
    gif.src = "images/letter-final.png";
    letterText.classList.remove("hidden");
}, 1200);