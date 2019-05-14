// Your code goes here
let bus = document.querySelectorAll("img")[0];
let letsGoIMG = document.querySelectorAll("img")[1];
let adventureIMG = document.querySelectorAll("img")[2];
let destinationIMG = document.querySelectorAll("img")[3];
let images = document.querySelectorAll("img");

let introHead = document.querySelectorAll(".intro h2")[0];
let introText = document.querySelectorAll(".intro p")[0];

let letsGoHead = document.querySelectorAll(".home h2")[1];
let letsGoText = document.querySelectorAll(".home p")[1];
let letsGoText2 = document.querySelectorAll(".home p")[2];

let adventureHead = document.querySelectorAll(".home h2")[2];
let adventureText = document.querySelectorAll(".home p")[3];
let adventureText2 = document.querySelectorAll(".home p")[4];

let destinationHead = document.querySelectorAll(".home h2")[3];
let destinationText = document.querySelectorAll(".home p")[5];

let logo = document.querySelector(".logo-heading");

let home = document.querySelector(".home");
let body = document.querySelector("body");

let bottomLeftHead = document.querySelectorAll(".destination h4")[0];
let bottomMidHead = document.querySelectorAll(".destination h4")[1];
let bottomRightHead = document.querySelectorAll(".destination h4")[2];
let bottomLeftText = document.querySelectorAll(".destination p")[0];
let bottomMidText = document.querySelectorAll(".destination p")[1];
let bottomRightText = document.querySelectorAll(".destination p")[2];
let bottomLeftButton = document.querySelectorAll(".btn")[0];
let bottomMidButton = document.querySelectorAll(".btn")[1];
let bottomRightButton = document.querySelectorAll(".btn")[2];

let tallyCount = document.querySelectorAll('.main-navigation h2')[0];

let tally = 0;

tallyCount.textContent = `Total Events : ${tally}`;


//Let's Go Section ------------------------------------------------------------------->

letsGoIMG.addEventListener("click", () => {
  letsGoIMG.setAttribute(
    "src",
    "https://meme.xyz/uploads/posts/t/l-40729-wack.jpg"
  );
  letsGoHead.textContent = "WACK";
  letsGoText.textContent =
    "wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wackwack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack";
  letsGoText2.textContent =
    "wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack";
  bottomLeftHead.textContent = "WACK";
  bottomLeftText.textContent =
    "wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack";
  bottomLeftButton.textContent = "WACK ATTACK";
  bottomLeftButton.classList.add("left-butt");
  tallyCount.textContent = `Total Events : ${tally}`;
});

letsGoIMG.addEventListener("mouseover", () => {
  letsGoIMG.style.cursor = "pointer";
  letsGoIMG.style.opacity = "0.5";
  tally += 1;
  tallyCount.textContent = `Total Events : ${tally}`;
});

letsGoIMG.addEventListener("mouseout", () => {
  letsGoIMG.style.opacity = "1";
});

//Adventure Section ------------------------------------------------------------------>

adventureIMG.addEventListener("click", () => {
  adventureIMG.setAttribute(
    "src",
    "https://meme.xyz/uploads/posts/t/l-40729-wack.jpg"
  );
  adventureHead.textContent = "WACK";
  adventureText.textContent =
    "wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wackwack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack";
  adventureText2.textContent =
    "wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack";
  bottomMidHead.textContent = "WACK";
  bottomMidText.textContent =
    "wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack";
  bottomMidButton.textContent = "WACK ATTACK";
  bottomMidButton.classList.add("mid-butt");
  tally += 1;
  tallyCount.textContent = `Total Events : ${tally}`;
});

adventureIMG.addEventListener("mouseover", () => {
  adventureIMG.style.cursor = "pointer";
  adventureIMG.style.opacity = "0.5";
  tally += 1;
  tallyCount.textContent = `Total Events : ${tally}`;
});

adventureIMG.addEventListener("mouseout", () => {
  adventureIMG.style.opacity = "1";
});

//Destination Section --------------------------------------------------------------->

destinationIMG.addEventListener("click", () => {
  destinationIMG.setAttribute(
    "src",
    "https://meme.xyz/uploads/posts/t/l-40729-wack.jpg"
  );
  destinationHead.textContent = "WACK";
  destinationText.textContent =
    "wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wackwack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack";
  bottomRightHead.textContent = "WACK";
  bottomRightText.textContent =
    "wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack wack";
  bottomRightButton.textContent = "WACK ATTACK";
  bottomRightButton.classList.add("right-butt");
  tally += 1;
  tallyCount.textContent = `Total Events : ${tally}`;
});

destinationIMG.addEventListener("mouseover", () => {
  destinationIMG.style.cursor = "pointer";
  destinationIMG.style.opacity = "0.5";
  tally += 1;
  tallyCount.textContent = `Total Events : ${tally}`;
});

destinationIMG.addEventListener("mouseout", () => {
  destinationIMG.style.opacity = "1";
});

//BUS photo --------------------------------------------------------------------------->

function interval() {
  setInterval(() => {
    introText.textContent += "NO ";
  }, 300);
}

function clear() {
  clearInterval(interval);
}

bus.addEventListener("click", () => {
  bus.setAttribute(
    "src",
    "https://i.pinimg.com/236x/92/ed/86/92ed86a92719e0b0e81974fb7a22d0ac--smiley-emoji-smiley-faces.jpg"
  );
  introHead.textContent = "NO";
  introText.textContent = "NO ";
  interval();
  introHead.classList.add("intro-head");
  introText.classList.add("intro-text");
  tally += 1;
  tallyCount.textContent = `Total Events : ${tally}`;
});

bus.addEventListener("mouseenter", () => {
  tally += 1;
  tallyCount.textContent = `Total Events : ${tally}`;
  bus.style.opacity = "0.5";
  bus.style.cursor = "pointer";
  introHead.textContent = "NO";
  introText.textContent =
    "NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO";
});

bus.addEventListener("mouseout", () => {
  bus.style.opacity = "1.0"; 
  if (introHead.classList.contains("intro-head")) {
    introHead.textContent = "NO";
    introText.textContent =
      "NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO";
  } else {
    introHead.textContent = "Welcome To Fun Bus!";
    introText.textContent =
      "Traveling expedition modern, clean webdesign blogger clean website theme website modern. Design pretty design, travelblogger adventure WordPress wanderlust theme blogger website expedition theme travelblogger. Adventure fun traveler pretty design website expedition.";
  }
});

//LOGO section ------------------------------------------------------------------------>

logo.textContent = "You like BUSES?";

logo.addEventListener("mouseover", () => {
  logo.textContent = "DO YOU?!";
  logo.style.cursor = "pointer";
  tally += 1;
  tallyCount.textContent = `Total Events : ${tally}`;
});

logo.addEventListener("mouseout", () => {
  logo.textContent = "You like BUSES?";
  logo.style.cursor = "default";
});

//BODY CHANGE ----------------------------------------------------------------------->



const everything = function() {
  home.style.display = "none";
  tally += 1;
  tallyCount.textContent = `Total Events : ${tally}`;
  body.style.backgroundImage =
    "url('https://meme.xyz/uploads/posts/t/l-40729-wack.jpg')";
};

logo.addEventListener("click", everything);

bottomLeftButton.addEventListener("click", () => {
  if (bottomLeftButton.classList.contains("left-butt")) {
    everything();
  } else {
    tally += 1;
    tallyCount.textContent = `Total Events : ${tally}`;
    bottomLeftButton.textContent = "NO";
    bottomLeftHead.textContent = "NO";
    bottomLeftText.textContent =
      "NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO";
  }
});

bottomMidButton.addEventListener("click", () => {
  if (bottomMidButton.classList.contains("mid-butt")) {
    everything();
  } else {
    tally += 1;
    tallyCount.textContent = `Total Events : ${tally}`;
    bottomMidButton.textContent = "NO";
    bottomMidHead.textContent = "NO";
    bottomMidText.textContent =
      "NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO";
  }
});

bottomRightButton.addEventListener("click", () => {
  if (bottomRightButton.classList.contains("right-butt")) {
    everything();
  } else {
    tally += 1;
    tallyCount.textContent = `Total Events : ${tally}`;
    bottomRightButton.textContent = "NO";
    bottomRightHead.textContent = "NO";
    bottomRightText.textContent =
      "NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO";
  }
});

//NAV BAR ----------------------->

let home2 = document.querySelectorAll(".nav a")[0];
let about = document.querySelectorAll(".nav a")[1];
let blog = document.querySelectorAll(".nav a")[2];
let contact = document.querySelectorAll(".nav a")[3];

home2.addEventListener("click", () => {
  tally += 1;
  tallyCount.textContent = `Total Events : ${tally}`;
  home2.textContent = "NO";
});

about.addEventListener("click", () => {
  tally += 1;
  tallyCount.textContent = `Total Events : ${tally}`;
  about.textContent = "NO";
});

blog.addEventListener("click", () => {
  tally += 1;
  tallyCount.textContent = `Total Events : ${tally}`;
  blog.textContent = "NO";
});

contact.addEventListener("click", () => {
  tally += 1;
  tallyCount.textContent = `Total Events : ${tally}`;
  contact.textContent = "NO";
});


window.addEventListener('keydown', (event) => {
    let x = event.which || event.keyCode;
    if (x == 82) {
      body.style.backgroundColor = "red";
      tally += 1;
      tallyCount.textContent = `Total Events : ${tally}`;
    } else if (x == 71) {
        body.style.backgroundColor = "green";
        tally += 1;
        tallyCount.textContent = `Total Events : ${tally}`;
    } else if (x == 89) {
        body.style.backgroundColor = "yellow";
        tally += 1;
        tallyCount.textContent = `Total Events : ${tally}`;
    } else if (x == 66) {
        body.style.backgroundColor = "blue";
        tally += 1;
        tallyCount.textContent = `Total Events : ${tally}`;
    } else if (x == 87) {
        body.style.backgroundColor = "white";
        tally += 1;
        tallyCount.textContent = `Total Events : ${tally}`;
    } else if (x == 79) {
        body.style.backgroundColor = "orange";
        tally += 1;
        tallyCount.textContent = `Total Events : ${tally}`;
    } else if (x == 81) {
        body.style.backgroundImage = "url('https://cdn-images-1.medium.com/max/1200/1*Km98PgzRp9yRYfVZeSzwzQ.png')";
        home.style.display = "none";
        tally += 1;
        tallyCount.textContent = `Total Events : ${tally}`;
    } else if (x == 84) {
        console.log(tally);
    }
})
