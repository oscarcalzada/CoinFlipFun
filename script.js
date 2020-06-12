document.getElementById('tossButton').addEventListener('click', coinAnim);
document.getElementById('reset').addEventListener('click', resetButton);

let coin = document.getElementById('coin');
let toss = document.getElementById('tossButton');

function coinAnim() {
 let number = Math.floor(Math.random(1) * 2);
  if (number == 0) {
    coin.src = "https://www.gambling911.com/files/styles/article_image/public/publisher/Super-Bowl-Coin-Toss-Heads-020316L.jpg?itok=L4jga2uu";    
    coin.style.animationDuration = "0s";
    toss.style.visibility = "hidden";
  } else {
    coin.src = "https://random-ize.com/coin-flip/us-half-dollar/us-half-dollar-back.jpg";
    coin.style.animationDuration = "0s";
    toss.style.visibility = "hidden";
  }
}

function resetButton() {
  coin.style.animationDuration = ".1s";
  toss.style.visibility = "visible";
}
