//1.ランダムにおみくじ画像のパスを返す処理
function getRandomImage() {
  const number = Math.floor(Math.random() * 7);
  const imagePath = `./images/omikuji-${number.toString()}.png`;
  return imagePath;
}

function playOmikuji() {
  const timer = setInterval(function () {
    document.querySelector("#js-result").setAttribute("src", getRandomImage());
  }, 100);

  setTimeout(function () {
    clearInterval(timer);
  },3000);
}

document.querySelector("#js-button").addEventListener("click", playOmikuji)


//2.ボタンを押したらスロットが回転する処理
//3.数秒後にスロットが止まる処理


console.log('hello');