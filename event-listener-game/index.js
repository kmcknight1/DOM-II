TweenMax.from(".head", 2.8, {x:35, rotation:360, opacity:0, scale:0.3, ease: Back.easeInOut.config(2), y: -200 });

let startBtn = document.querySelector('.start-btn')

startBtn.addEventListener('click', event => {
    console.log("clicked");
})